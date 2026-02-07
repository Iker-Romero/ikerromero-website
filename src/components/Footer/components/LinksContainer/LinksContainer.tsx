import H2 from '@/components/H2/H2'
import Link from '@/components/Link/Link'
import { ComponentType } from 'react'

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
    <div className="flex flex-col">
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
            {Icon && <Icon className="h-[1.3125rem] align-middle" />}
          </Link>
        )
      })}
    </div>
  )
}

export default LinksContainer
