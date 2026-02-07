import H2 from '@/components/H2/H2'
import Link from '@/components/Link/Link'
import { ComponentType } from 'react'

import s from './LinksContainer.module.scss'

type Props = {
  title: string
  links: {
    name?: string
    icon?: ComponentType<{ className?: string }>
    link: string
  }[]
}

const LinksContainer = ({ title, links }: Props) => {
  return (
    <div className={s.container}>
      <H2 variant="footer">{title}</H2>
      {links.map(({ name, icon: Icon, link }) => {
        const isExternal = ['http', 'mailto'].some(prefix =>
          link.includes(prefix)
        )

        return (
          <Link
            key={name}
            href={link}
            target={isExternal ? '_blank' : '_self'}
            variant="small"
          >
            {name}
            {Icon && <Icon className={s.icon} />}
          </Link>
        )
      })}
    </div>
  )
}

export default LinksContainer
