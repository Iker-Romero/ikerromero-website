import { TechnologiesType } from '@/components/Experience/data'
import Link from '@/components/Link/Link'

import { Dictionary } from '../../../../../../../get-dictionary'
import s from './ExperienceCard.module.scss'
import Technologies from './components/Technologies/Technologies'

type Props = {
  id: number
  link?: string
  technologies: TechnologiesType
  dict: Dictionary
}

const ExperienceCard = ({ id, link, technologies, dict }: Props) => {
  const { role, company, description, datesRange } =
    dict.experience.jobs.find(job => job.id === id) ?? {}

  return (
    <div className={s['experience-card']}>
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
