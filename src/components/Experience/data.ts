export type TechnologiesType = (
  | 'HTML5'
  | 'CSS3'
  | 'Sass'
  | 'Tailwind CSS'
  | 'NativeWind'
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'React Native'
  | 'NextJS'
  | 'NodeJS'
  | 'Express'
  | 'MongoDB'
  | 'SQLite'
  | 'Expo'
)[]

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
    image: '/images/experience/Triskell-landing.png',
    technologies: ['JavaScript', 'React', 'Sass']
  }
]
