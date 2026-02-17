import { TechnologiesType } from '@/lib/types'

type ExperienceType = {
  id: number
  technologies: TechnologiesType
  link?: string
  image?: string
}

export const experience: ExperienceType[] = [
  {
    id: 1,
    link: 'https://www.triskellsoftware.com/',
    image: '/images/experience/Triskell-landing.webp',
    technologies: ['JavaScript', 'React', 'Sass']
  }
]
