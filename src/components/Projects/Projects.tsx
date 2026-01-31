import { getMessages } from 'i18n'
import { getLocale, getTranslations } from 'next-intl/server'

import s from './Projects.module.scss'
import ProjectCard from './components/ProjectCard/ProjectCard'
import { projects } from './data'

const Projects = async () => {
  const t = await getTranslations('projects')

  const locale = await getLocale()
  const messages = await getMessages(locale)

  return (
    <section id="projectsSection" className={s['projects-section']}>
      <h2 id="projects" className="hidden fadeInTop">
        {t('title')}
      </h2>
      <div className={s['cards-container']}>
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
            <ProjectCard
              key={id}
              {...{
                image,
                technologies,
                link,
                name,
                description,
                badge
              }}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
