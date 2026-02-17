import ContentEntry from '@/components/ContentEntry/ContentEntry'
import { getMessages } from 'i18n'
import { getLocale, getTranslations } from 'next-intl/server'

import { experience } from './data'

const Experience = async () => {
  const t = await getTranslations('experience')

  const locale = await getLocale()
  const messages = await getMessages(locale)

  return (
    <section id="experienceSection" className="flex flex-col gap-6">
      <h2 id="experience" className="animate-hidden fadeInTop">
        {t('title')}
      </h2>
      <div className="flex flex-col gap-12">
        {experience.map(({ id, technologies, link, image }) => {
          const job = messages.experience.jobs.find(job => job.id === id)

          if (!job) {
            console.error(`Job with id ${id} not found`)
            return null
          }

          const { role, company, description, datesRange } = job

          return (
            <ContentEntry
              key={id}
              image={image}
              variant="experience"
              title={`${role} | ${company}`}
              subtitle={datesRange}
              description={description}
              technologies={technologies}
              link={link}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Experience
