import { ReactNode } from 'react'

import s from './H1.module.scss'

type Props = {
  variant?: 'footer' | 'toast' | 'toast-error'
  children: ReactNode
}

const H1 = ({ variant, children }: Props) => {
  return (
    <h1 className={variant ? s[`H1-${variant}-variant`] : ''}>{children}</h1>
  )
}

export default H1
