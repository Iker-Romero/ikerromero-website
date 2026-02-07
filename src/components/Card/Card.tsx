import { TechnologiesType } from '@/components/Experience/data'
import Link from '@/components/Link/Link'
import Image from 'next/image'

import s from './Card.module.scss'
import Technologies from './components/Technologies/Technologies'

type Props = {
  image?: string
  title: string
  subtitle?: string
  badge?: string
  description: string
  technologies: TechnologiesType
  link?: string
}

const Card = ({
  image,
  title,
  subtitle,
  badge,
  description,
  technologies,
  link
}: Props) => {
  return (
    <div className={s.card + ' hidden fadeInRight'}>
      {image && (
        <div className={s['image-wrapper']}>
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            sizes="(max-width: 900px) 100vw, 900px"
            className={s.image}
          />
        </div>
      )}
      <div className={s.content}>
        {subtitle && <span className={s.subtitle}>{subtitle}</span>}
        <h3 className={s.title}>
          {link ? (
            <Link
              href={link}
              target="_blank"
              variant="heading"
              className={s['external-link-icon']}
            >
              {title}
            </Link>
          ) : (
            title
          )}
          {badge && <span className={s.badge}>{badge}</span>}
        </h3>
        <p>{description}</p>
        <Technologies technologies={technologies} />
      </div>
    </div>
  )
}

export default Card
