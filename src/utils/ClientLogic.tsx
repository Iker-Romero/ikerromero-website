'use client'

import { DEFAULT_PAGE_DATA, OWN_ANALYTICS_INTERVAL_MS } from 'consts'
import { usePathname } from 'navigation'
import { useEffect } from 'react'

import { Page } from '../../globals'
import {
  analyticsUpdate,
  listenClicks,
  observeSections,
  sectionObserver,
  startSessionAnalytics
} from './analytics'
import addScrollAnimationsListener from './scrollDrivenAnimations'

// Variables

export let page: Page = DEFAULT_PAGE_DATA

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

        page = DEFAULT_PAGE_DATA
        listenClicks()
        sectionObserver.disconnect()
        observeSections(sectionObserver)

        analyticsUpdate({ lastPage })
      }

      analyticsIntervalId = setInterval(
        analyticsUpdate,
        OWN_ANALYTICS_INTERVAL_MS
      )
    }

    handleRouteChange()
  }, [pathname])

  return null
}

export default ClientLogic
