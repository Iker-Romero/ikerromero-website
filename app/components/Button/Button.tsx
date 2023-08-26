import { MouseEvent, ReactNode } from 'react'

import s from './Button.module.scss'

type Props = {
  children: ReactNode
  variant?: 'callToAction'
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, variant = 'callToAction', onClick }: Props) => {
  return (
    <button
      className={`${s.button}${variant ? ` variant-${s[variant]}` : ''}`}
      {...{ onClick }}
    >
      {children}
    </button>
  )
}

export default Button
