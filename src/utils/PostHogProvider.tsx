'use client'

import type { PostHog } from 'posthog-js'
import { ReactNode, useEffect, useState } from 'react'

const isEnabled = process.env.NEXT_PUBLIC_ENABLE_POSTHOG === 'true'

export function PHProvider({ children }: { children: ReactNode }) {
  const [PostHogContext, setPostHogContext] = useState<{
    Provider: React.ComponentType<{ client: PostHog; children: ReactNode }>
    client: PostHog
  } | null>(null)

  useEffect(() => {
    if (!isEnabled || !process.env.NEXT_PUBLIC_POSTHOG_KEY) return

    const init = () => {
      Promise.all([import('posthog-js'), import('posthog-js/react')]).then(
        ([posthogModule, reactModule]) => {
          const posthog = posthogModule.default
          posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
            ui_host: 'https://eu.posthog.com',
            person_profiles: 'identified_only'
          })
          setPostHogContext({
            Provider: reactModule.PostHogProvider,
            client: posthog
          })
        }
      )
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

  if (!PostHogContext) return <>{children}</>

  const { Provider, client } = PostHogContext
  return <Provider client={client}>{children}</Provider>
}
