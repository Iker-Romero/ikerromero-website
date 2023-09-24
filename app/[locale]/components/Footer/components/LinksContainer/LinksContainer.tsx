import H2 from '@/components/H2/H2'
import Link from '@/components/Link/Link'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import s from './LinksContainer.module.scss'

type Props = {
  title: string
  links: {
    name?: string
    icon?: IconDefinition
    link: string
  }[]
}

const LinksContainer = ({ title, links }: Props) => {
  return (
    <div className={s.container}>
      <H2 variant="footer">{title}</H2>
      {links.map(({ name, icon, link }) => {
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
            {icon && <FontAwesomeIcon {...{ icon }} className={s.icon} />}
          </Link>
        )
      })}
    </div>
  )
}

export default LinksContainer
