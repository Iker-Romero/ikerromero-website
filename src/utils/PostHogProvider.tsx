'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ReactNode } from 'react'

const isEnabled = process.env.NEXT_PUBLIC_ENABLE_POSTHOG === 'true'

if (isEnabled && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    ui_host: 'https://eu.posthog.com',
    person_profiles: 'identified_only'
  })
}

export function PHProvider({ children }: { children: ReactNode }) {
  if (!isEnabled) {
    return children
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
