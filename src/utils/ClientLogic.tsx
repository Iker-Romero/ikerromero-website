'use client'

import { usePathname } from 'navigation'
import { useEffect } from 'react'

import addScrollAnimationsListener from './scrollDrivenAnimations'

const ClientLogic = () => {
  const pathname = usePathname()

  useEffect(() => {
    addScrollAnimationsListener()
  }, [pathname])

  return null
}

export default ClientLogic
