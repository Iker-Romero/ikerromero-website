import { ReactNode } from 'react'

import s from './H2.module.scss'

type Props = {
  variant?: 'footer' | 'toast' | 'toast-error'
  children: ReactNode
}

const H2 = ({ variant, children }: Props) => {
  return (
    <h2 className={variant ? s[`h2-${variant}-variant`] : ''}>{children}</h2>
  )
}

export default H2
