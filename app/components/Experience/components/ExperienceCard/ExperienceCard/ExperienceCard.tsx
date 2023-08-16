import ConditionalWrapper from 'utils/ConditionalWrapper'

import s from './ExperienceCard.module.scss'
import WrapperLink from './components/WrapperLink/WrapperLink'

type Props = {
  datesRange: string
  role: string
  company: string
  link?: string
  description: string
}

const ExperienceCard = ({
  datesRange,
  role,
  company,
  link,
  description
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
        <p className={s.description}>{description}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
