import NextLink, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

import s from './Link.module.scss'

interface Props extends LinkProps {
  children: ReactNode
  variant?: 'callToAction' | 'callToActionSecondary' | 'header'
  target?: '_blank' | '_self' | '_parent' | '_top' | string
}

const Link = ({ children, href, variant, target }: Props) => {
  return (
    <NextLink
      className={`${s.link} ${variant ? s[`variant-${variant}`] : ''}`}
      {...{ href, target }}
    >
      {children}
    </NextLink>
  )
}

export default Link
