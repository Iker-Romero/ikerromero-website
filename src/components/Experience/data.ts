export type TechnologiesType = (
  | 'HTML5'
  | 'CSS3'
  | 'Sass'
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'NextJS'
  | 'NodeJS'
  | 'Express'
  | 'MongoDB'
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
    technologies: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'React']
  },
  {
    id: 2,
    technologies: [
      'HTML5',
      'CSS3',
      'Sass',
      'JavaScript',
      'TypeScript',
      'React',
      'NextJS',
      'NodeJS',
      'Express',
      'MongoDB'
    ]
  }
]
