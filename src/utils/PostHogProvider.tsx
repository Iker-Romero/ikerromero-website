'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { ReactNode } from 'react'

const isProduction = process.env.NODE_ENV === 'production'

if (isProduction && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    ui_host: 'https://eu.posthog.com',
    person_profiles: 'identified_only'
  })
}

export function PHProvider({ children }: { children: ReactNode }) {
  if (!isProduction) {
    return children
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
