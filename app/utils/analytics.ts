import axios from 'axios'
import { CLICK_ELEMENTS_IDS, SECTIONS_IDS } from 'consts'

import { page, sessionStartDate } from './ClientLogic'

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
    sections: Object.values(page.sections),
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
