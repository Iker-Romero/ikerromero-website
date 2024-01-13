import { Dictionary } from 'i18n/get-dictionary'

import s from './Experience.module.scss'
import ExperienceCard from './components/ExperienceCard/ExperienceCard/ExperienceCard'
import { experience } from './data'

type Props = {
  dict: Dictionary
}

const Experience = ({ dict }: Props) => {
  const { title } = dict.experience

  return (
    <section id="experienceSection" className={s['experience-section']}>
      <h2 id="experience" className="hidden fadeInTop">
        {title}
      </h2>
      <div className={s['cards-container']}>
        {experience.map(({ id, technologies, link }) => (
          <ExperienceCard key={id} {...{ id, technologies, link, dict }} />
        ))}
      </div>
    </section>
  )
}

export default Experience
