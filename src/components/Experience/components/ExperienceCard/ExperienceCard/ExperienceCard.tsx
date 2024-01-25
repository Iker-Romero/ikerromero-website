import { TechnologiesType } from '@/components/Experience/data'
import Link from '@/components/Link/Link'

import s from './ExperienceCard.module.scss'
import Technologies from './components/Technologies/Technologies'

type Props = {
  link?: string
  technologies: TechnologiesType
  // Localized
  role: string
  company: string
  description: string
  datesRange: string
}

const ExperienceCard = ({
  link,
  technologies,
  // Localized
  role,
  company,
  description,
  datesRange
}: Props) => {
  return (
    <div className={s['experience-card'] + ' hidden fadeInRight'}>
      <span>{datesRange}</span>
      <h3 className={s.title}>
        {link ? (
          <Link
            href={link}
            target="_blank"
            variant="heading"
            className={s['external-link-icon']}
          >
            {role} | {company}
          </Link>
        ) : (
          `${role} | ${company}`
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
