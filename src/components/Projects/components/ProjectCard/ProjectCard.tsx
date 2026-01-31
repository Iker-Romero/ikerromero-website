import { TechnologiesType } from '@/components/Experience/data'
import Technologies from '@/components/Experience/components/ExperienceCard/ExperienceCard/components/Technologies/Technologies'
import Link from '@/components/Link/Link'
import Image from 'next/image'

import s from './ProjectCard.module.scss'

type Props = {
  image: string
  technologies: TechnologiesType
  link?: string
  // Localized
  name: string
  description: string
  badge?: string
}

const ProjectCard = ({
  image,
  technologies,
  link,
  // Localized
  name,
  description,
  badge
}: Props) => {
  return (
    <div className={s['project-card'] + ' hidden fadeInRight'}>
      <div className={s['image-wrapper']}>
        <Image
          src={image}
          alt={name}
          width={600}
          height={400}
          className={s.image}
        />
      </div>
      <div className={s.content}>
        <h3 className={s.title}>
          {link ? (
            <Link
              href={link}
              target="_blank"
              variant="heading"
              className={s['external-link-icon']}
            >
              {name}
            </Link>
          ) : (
            name
          )}
          {badge && <span className={s.badge}>{badge}</span>}
        </h3>
        <p>{description}</p>
        <Technologies technologies={technologies} />
      </div>
    </div>
  )
}

export default ProjectCard
