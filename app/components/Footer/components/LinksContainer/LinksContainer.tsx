import Link from '@/components/Link/Link'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import s from './LinksContainer.module.scss'

type Props = {
  title: string
  links: {
    name: string
    icon?: IconDefinition
    link: string
  }[]
}

const LinksContainer = ({ title, links }: Props) => {
  return (
    <div className={s.container}>
      <h4>{title}</h4>
      {links.map(({ name, icon, link }) => {
        const isExternal = link.includes('http')

        return (
          <Link
            key={name}
            href={link}
            target={isExternal ? '_blank' : '_self'}
            variant="small"
          >
            {name}
            {icon && (
              <FontAwesomeIcon
                {...{ icon }}
                // className={'fa-lg'}
                className={s.icon}
              />
            )}
          </Link>
        )
      })}
    </div>
  )
}

export default LinksContainer
