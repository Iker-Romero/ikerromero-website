import NextLink, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

import s from './Link.module.scss'

interface Props extends LinkProps {
  children: ReactNode
  variant?:
    | 'callToAction'
    | 'callToActionSecondary'
    | 'header'
    | 'logo'
    | 'logoSmall'
    | 'small'
    | 'underlined'
  target?: '_blank' | '_self' | '_parent' | '_top' | string
  className?: string
}

const Link = ({ children, href, variant, target, className }: Props) => {
  return (
    <NextLink
      className={`${s.link} ${variant ? s[`variant-${variant}`] : ''} ${
        className || ''
      }`}
      {...{ href, target }}
    >
      {children}
    </NextLink>
  )
}

export default Link
