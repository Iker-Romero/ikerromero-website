import { getMessages } from 'i18n'
import { getLocale, getTranslations } from 'next-intl/server'

import Card from '@/components/Card/Card'

import { projects } from './data'

const Projects = async () => {
  const t = await getTranslations('projects')

  const locale = await getLocale()
  const messages = await getMessages(locale)

  return (
    <section id="projectsSection" className="mb-9 flex flex-col gap-6">
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
            <Card
              key={id}
              image={image}
              imageSizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 900px) calc(50vw - 2rem), 430px"
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
