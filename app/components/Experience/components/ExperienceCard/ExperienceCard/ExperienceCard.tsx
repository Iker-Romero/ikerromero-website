import { TechnologiesType } from '@/components/Experience/data'
import ConditionalWrapper from 'utils/ConditionalWrapper'

import s from './ExperienceCard.module.scss'
import Technologies from './components/Technologies/Technologies'
import WrapperLink from './components/WrapperLink/WrapperLink'

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
    <div className={s['cards-container']}>
      <div className={s['experience-card']}>
        <span className={s['date-range']}>{datesRange}</span>
        <h3 className={s.title}>
          <ConditionalWrapper
            condition={!!link}
            wrapper={children => <WrapperLink {...{ link, children }} />}
          >
            {role} | {company}
          </ConditionalWrapper>
        </h3>
        <div className={s.content}>
          <p className={s.description}>{description}</p>
          <Technologies {...{ technologies }} />
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
