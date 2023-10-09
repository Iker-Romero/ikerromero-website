import { ReactNode } from 'react'

import s from './H1.module.scss'

type Props = {
  variant?: 'hero'
  className?: string
  children: ReactNode
}

const H1 = ({ variant, className, children }: Props) => {
  return (
    <h1
      className={
        (variant ? s[`h1-${variant}-variant`] : '') + ' ' + (className || '')
      }
    >
      {children}
    </h1>
  )
}

export default H1
