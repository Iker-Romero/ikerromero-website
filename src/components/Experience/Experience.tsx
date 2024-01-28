import { getMessages } from 'i18n'
import { getLocale, getTranslations } from 'next-intl/server'

import s from './Experience.module.scss'
import ExperienceCard from './components/ExperienceCard/ExperienceCard/ExperienceCard'
import { experience } from './data'

const Experience = async () => {
  const t = await getTranslations('experience')

  const locale = await getLocale()
  const messages = await getMessages(locale)

  return (
    <section id="experienceSection" className={s['experience-section']}>
      <h2 id="experience" className="hidden fadeInTop">
        {t('title')}
      </h2>
      <div className={s['cards-container']}>
        {experience.map(({ id, technologies, link }) => {
          const job = messages.experience.jobs.find(job => job.id === id)

          if (!job) {
            console.error(`Job with id ${id} not found`)
            return null
          }

          const { role, company, description, datesRange } = job

          return (
            <ExperienceCard
              key={id}
              {...{
                technologies,
                link,
                role,
                company,
                description,
                datesRange
              }}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Experience
