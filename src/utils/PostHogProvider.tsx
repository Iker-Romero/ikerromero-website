'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ReactNode, useEffect } from 'react'

export function PHProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: '/i',
        ui_host: 'https://eu.posthog.com',
        person_profiles: 'identified_only',
        loaded: posthog => {
          if (process.env.NODE_ENV === 'development') posthog.debug()
        }
      })
    }
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
