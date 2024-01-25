import { CLICK_ELEMENTS_IDS, SECTIONS_IDS } from 'consts'
import { axiosClient } from 'services/axiosClient'

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

      axiosClient.post('/api/clicks', {
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

// Save session data in DB and user in localStorage
const saveInitialAnalyticsData = async () => {
  const userId = localStorage.getItem('userId')

  const sessionResponse = await axiosClient.post('/api/sessions', {
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
    console.log('lastPage', lastPage)
    if (lastPage) {
      axiosClient.patch(`/api/pages/${lastPage._id}`, {
        sessionStartDate,
        sections: getSectionsTransformed(lastPage)
      })
    }

    const sessionId = localStorage.getItem('sessionId')

    if (page._id) {
      axiosClient.patch(`/api/pages/${page._id}`, {
        sessionStartDate,
        sections: getSectionsTransformed(page)
      })
    } else {
      const pageCreateResponse = await axiosClient.post('/api/pages', {
        sessionId,
        timeSinceSessionStart: Date.now() - sessionStartDate.getTime(),
        sections: getSectionsTransformed(page)
      })

      page._id = pageCreateResponse.data._id
    }

    axiosClient.patch(`/api/sessions/${sessionId}`, {
      sessionStartDate
    })
  } catch (error) {
    console.error(error)
  }
}

export const getSectionsTransformed = (page: Page) =>
  Object.values(page.sections).map(section => ({ ...section, page: page._id }))
