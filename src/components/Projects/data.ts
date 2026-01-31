import { TechnologiesType } from '@/components/Experience/data'

type ProjectType = {
  id: string
  image: string
  technologies: TechnologiesType
  link?: string
}

export const projects: ProjectType[] = [
  {
    id: 'habitsflow',
    image: '/images/projects/habitsflow.webp',
    link: 'https://habitsflow.app',
    technologies: ['TypeScript', 'React', 'NextJS', 'Tailwind CSS', 'MongoDB']
  },
  {
    id: 'liftlog',
    image: '/images/projects/session-started.jpg',
    technologies: ['TypeScript', 'React Native', 'Expo', 'NativeWind', 'SQLite']
  },
  {
    id: 'weeklyplanner',
    image: '/images/projects/WeeklyPlanner-square.png',
    technologies: ['TypeScript', 'React', 'NextJS', 'Tailwind CSS']
  },
  {
    id: 'madriddelta',
    image: '/images/projects/MadridDelta-Instagram-square.PNG',
    technologies: ['JavaScript', 'React', 'NodeJS', 'Express', 'CSS3', 'MongoDB']
  }
]
