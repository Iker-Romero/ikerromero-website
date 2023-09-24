import { ReactNode } from 'react'

import s from './H1.module.scss'

type Props = {
  variant?: 'hero'
  children: ReactNode
}

const H1 = ({ variant, children }: Props) => {
  return (
    <h1 className={variant ? s[`h1-${variant}-variant`] : ''}>{children}</h1>
  )
}

export default H1
