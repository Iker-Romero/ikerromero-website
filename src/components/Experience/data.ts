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
}

export const experience: ExperienceType[] = [
  {
    id: 1,
    link: 'https://www.triskellsoftware.com/',
    technologies: ['JavaScript', 'React', 'Sass']
  }
]
