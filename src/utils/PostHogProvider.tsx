'use client'

import { ReactNode, useEffect } from 'react'

const isEnabled = process.env.NEXT_PUBLIC_ENABLE_POSTHOG === 'true'

export function PHProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!isEnabled || !process.env.NEXT_PUBLIC_POSTHOG_KEY) return

    const init = () => {
      import('posthog-js').then(({ default: posthog }) => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
          ui_host: 'https://eu.posthog.com',
          person_profiles: 'identified_only'
        })
      })
    }

    const id =
      'requestIdleCallback' in window
        ? window.requestIdleCallback(init)
        : setTimeout(init, 3000)

    return () => {
      if ('requestIdleCallback' in window)
        window.cancelIdleCallback(id as number)
      else clearTimeout(id as ReturnType<typeof setTimeout>)
    }
  }, [])

  return <>{children}</>
}
