import { Link as NextIntlLink } from 'navigation'
import { LinkProps } from 'next/link'
import { ReactNode } from 'react'

import s from './Link.module.scss'

interface Props extends LinkProps {
  children: ReactNode
  variant?:
    | 'callToAction'
    | 'callToActionSecondary'
    | 'heading'
    | 'logo'
    | 'logoSmall'
    | 'small'
    | 'underlined'
    | 'solid'
  target?: '_blank' | '_self' | '_parent' | '_top' | string
  className?: string
  id?: string
}

const Link = ({ children, href, variant, target, className, id }: Props) => {
  return (
    <NextIntlLink
      className={`${s.link} ${variant ? s[`${variant}-variant`] : ''} ${
        className || ''
      }`}
      {...{ href, target, id }}
    >
      {children}
    </NextIntlLink>
  )
}

export default Link
