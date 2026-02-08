'use client'

import { usePathname } from 'navigation'
import { useEffect } from 'react'

import addScrollAnimationsListener from './scrollDrivenAnimations'

const ClientLogic = () => {
  const pathname = usePathname()

  useEffect(() => {
    let cleanup: (() => void) | undefined

    const init = () => {
      cleanup = addScrollAnimationsListener()
    }

    const id =
      'requestIdleCallback' in window
        ? window.requestIdleCallback(init)
        : setTimeout(init, 100)

    return () => {
      if ('requestIdleCallback' in window)
        window.cancelIdleCallback(id as number)
      else clearTimeout(id as ReturnType<typeof setTimeout>)
      cleanup?.()
    }
  }, [pathname])

  return null
}

export default ClientLogic
