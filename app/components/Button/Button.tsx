import { MouseEvent, ReactNode } from 'react'

import s from './Button.module.scss'

type Props = {
  children: ReactNode
  variant?: 'callToAction'
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

const Button = ({
  children,
  variant = 'callToAction',
  onClick,
  disabled
}: Props) => {
  return (
    <button
      className={`${s.button} ${variant ? s[`${variant}-variant`] : ''}`}
      {...{ onClick, disabled }}
    >
      {children}
    </button>
  )
}

export default Button
