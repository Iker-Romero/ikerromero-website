import { TechnologiesType } from '@/components/Experience/data'
import Link from '@/components/Link/Link'

import s from './ExperienceCard.module.scss'
import Technologies from './components/Technologies/Technologies'

type Props = {
  datesRange: string
  role: string
  company: string
  link?: string
  description: string
  technologies: TechnologiesType
}

const ExperienceCard = ({
  datesRange,
  role,
  company,
  link,
  description,
  technologies
}: Props) => {
  return (
    <div className={s['experience-card']}>
      <span>{datesRange}</span>
      <h3 className={s.title}>
        {link && (
          <Link
            href={link}
            target="_blank"
            variant="header"
            className={s['external-link-icon']}
          >
            {role} | {company}
          </Link>
        )}
      </h3>
      <div className={s.content}>
        <p>{description}</p>
        <Technologies {...{ technologies }} />
      </div>
    </div>
  )
}

export default ExperienceCard
