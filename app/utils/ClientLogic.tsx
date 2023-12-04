'use client'

import { ANALYTICS_INTERVAL } from 'consts'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import {
  analyticsUpdate,
  listenClicks,
  observeSections,
  sectionObserver,
  startSessionAnalytics
} from './analytics'
import addScrollAnimationsListener from './scrollDrivenAnimations'

// States

export let page: Page = { sections: {}, clicks: [] }

export let analyticsIntervalId: NodeJS.Timer

// Functions

const ClientLogic = () => {
  const pathname = usePathname()

  useEffect(() => {
    startSessionAnalytics()
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
