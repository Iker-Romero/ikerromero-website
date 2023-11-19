import { MouseEvent, ReactNode } from 'react'

import s from './Button.module.scss'

type Props = {
  children: ReactNode
  variant?: 'callToAction'
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  className?: string
  id?: string
}

const Button = ({
  children,
  variant = 'callToAction',
  onClick,
  disabled,
  className,
  id
}: Props) => {
  return (
    <button
      className={`${s.button} ${variant ? s[`${variant}-variant`] : ''} ${
        className || ''
      }`}
      {...{ onClick, disabled, id }}
    >
      {children}
    </button>
  )
}

export default Button
