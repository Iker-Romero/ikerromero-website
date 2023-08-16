import s from './Experience.module.scss'
import ExperienceCard from './components/ExperienceCard/ExperienceCard/ExperienceCard'
import { experience } from './data'

const Experience = () => {
  return (
    <section className={s['experience-section']}>
      <h2>Professional Experience</h2>
      {experience.map((jobInfo, i) => (
        <ExperienceCard key={i} {...jobInfo} />
      ))}
    </section>
  )
}

export default Experience
