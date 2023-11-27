'use client'

import axios from 'axios'
import { ANALYTICS_INTERVAL } from 'consts'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import {
  getSectionObserver,
  listenClicks,
  observeSections,
  saveInitialAnalyticsData
} from './analytics'
import addScrollAnimationsListener from './scrollDrivenAnimations'

// States

export let sessionStartDate: Date

export let sectionObserver: IntersectionObserver

export let page: Page = { sections: {}, clicks: [] }

export let analyticsIntervalId: NodeJS.Timer

// Functions

const startSessionAnalytics = async () => {
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

const analyticsUpdate = async ({ lastPage }: { lastPage?: Page } = {}) => {
  try {
    if (lastPage) {
      axios.patch(`/api/pages/${lastPage._id}`, {
        sessionStartDate,
        sections: Object.values(lastPage.sections)
      })
    }

    const sessionId = localStorage.getItem('sessionId')

    if (page._id) {
      axios.patch(`/api/pages/${page._id}`, {
        sessionStartDate,
        sections: Object.values(page.sections)
      })
    } else {
      const pageCreateResponse = await axios.post('/api/pages', {
        sessionId,
        timeSinceSessionStart: Date.now() - sessionStartDate.getTime(),
        sections: Object.values(page.sections)
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

const ClientLogic = () => {
  const pathname = usePathname()

  useEffect(() => {
    try {
      startSessionAnalytics()
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = async () => {
      addScrollAnimationsListener()

      if (analyticsIntervalId) {
        clearInterval(analyticsIntervalId)

        const lastPage = page

        page = { sections: {}, clicks: [] }
        listenClicks()
        sectionObserver.disconnect()
        observeSections(sectionObserver)

        analyticsUpdate({ lastPage })
      }

      analyticsIntervalId = setInterval(analyticsUpdate, ANALYTICS_INTERVAL)
    }

    handleRouteChange()
  }, [pathname])

  return null
}

export default ClientLogic
