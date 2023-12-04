import axios from 'axios'
import { CLICK_ELEMENTS_IDS, SECTIONS_IDS } from 'consts'

import { page } from './ClientLogic'

// Variables

export let sessionStartDate: Date

export let sectionObserver: IntersectionObserver

// Functions

export const listenClicks = () => {
  const clickElements = CLICK_ELEMENTS_IDS.map(id =>
    document.getElementById(id)
  ).filter(Boolean) as HTMLElement[]

  clickElements.forEach(element =>
    element.addEventListener('click', async () => {
      const { id } = element as { id: ClickIdUnion }

      const click = {
        id,
        timeUntilEvent: Date.now() - sessionStartDate.getTime()
      }

      page.clicks.push(click)

      axios.post('/api/clicks', {
        ...click,
        pageId: page._id
      })
    })
  )
}

export const getSectionObserver = () => {
  const threshold: number[] = []

  const interval = 0.1

  for (let i = 0; threshold.length !== 1 / interval + 1; i += interval) {
    threshold.push(Number(i.toFixed(2)))
  }

  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(({ isIntersecting, target, intersectionRatio }) => {
        const { id } = target as { id: SectionIdUnion }

        if (isIntersecting) {
          intersectionRatio = Number(intersectionRatio.toFixed(2))

          if (intersectionRatio === 1) {
            observer.unobserve(target)
          }

          const { maxIntersectionRatio } = page.sections[id] || {}

          if (
            !maxIntersectionRatio ||
            maxIntersectionRatio < intersectionRatio
          ) {
            page.sections[id] = {
              id,
              maxIntersectionRatio: intersectionRatio
            }
          }
        }
      })
    },
    { threshold }
  )
}

export const observeSections = (sectionObserver: IntersectionObserver) => {
  const sectionElements = SECTIONS_IDS.map(id =>
    document.getElementById(id)
  ).filter(Boolean) as HTMLElement[]

  sectionElements.forEach(section => sectionObserver.observe(section))
}

export const saveInitialAnalyticsData = async () => {
  const userId = localStorage.getItem('userId')

  const sessionResponse = await axios.post('/api/sessions', {
    sessionStartDate,
    sections: getSectionsTransformed(page),
    userId
  })

  localStorage.setItem('sessionId', sessionResponse.data.sessionId)

  page._id = sessionResponse.data.pageId

  if (!userId) {
    const newUserId = sessionResponse.data.userId

    if (newUserId) {
      localStorage.setItem('userId', newUserId)
    }
  }
}

export const startSessionAnalytics = async () => {
  try {
    sessionStartDate = new Date()

    // Add listeners to click elements
    listenClicks()

    // Add listeners to sections
    sectionObserver = getSectionObserver()
    observeSections(sectionObserver)

    // Save session data in DB and user in localStorage
    saveInitialAnalyticsData()
  } catch (error) {
    console.error(error)
  }
}

export const analyticsUpdate = async ({
  lastPage
}: { lastPage?: Page } = {}) => {
  try {
    if (lastPage) {
      axios.patch(`/api/pages/${lastPage._id}`, {
        sessionStartDate,
        sections: getSectionsTransformed(lastPage)
      })
    }

    const sessionId = localStorage.getItem('sessionId')

    if (page._id) {
      axios.patch(`/api/pages/${page._id}`, {
        sessionStartDate,
        sections: getSectionsTransformed(page)
      })
    } else {
      const pageCreateResponse = await axios.post('/api/pages', {
        sessionId,
        timeSinceSessionStart: Date.now() - sessionStartDate.getTime(),
        sections: getSectionsTransformed(page)
      })

      page._id = pageCreateResponse.data._id
    }

    axios.patch(`/api/sessions/${sessionId}`, {
      sessionStartDate
    })
  } catch (error) {
    console.error(error)
  }
}

export const getSectionsTransformed = (page: Page) =>
  Object.values(page.sections).map(section => ({ ...section, page: page._id }))
