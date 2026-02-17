import ContentEntry from '@/components/ContentEntry/ContentEntry'
import { getMessages } from 'i18n'
import { getLocale, getTranslations } from 'next-intl/server'

import { projects } from './data'

const Projects = async () => {
  const t = await getTranslations('projects')

  const locale = await getLocale()
  const messages = await getMessages(locale)

  return (
    <section id="projectsSection" className="flex flex-col gap-6">
      <h2 id="projects" className="animate-hidden fadeInTop">
        {t('title')}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
        {projects.map(({ id, image, technologies, link }) => {
          const project = messages.projects.items.find(
            (item: { id: string }) => item.id === id
          )

          if (!project) {
            console.error(`Project with id ${id} not found`)
            return null
          }

          const { name, description, badge } = project

          return (
            <ContentEntry
              key={id}
              image={image}
              variant="project"
              title={name}
              description={description}
              technologies={technologies}
              link={link}
              badge={badge}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
