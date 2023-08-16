export type TechnologiesType = (
  | 'HTML5'
  | 'CSS3'
  | 'SCSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'NextJS'
  | 'NodeJS'
  | 'Express'
  | 'MongoDB'
)[]

type ExperienceType = {
  datesRange: string
  role: string
  company: string
  link?: string
  description: string
  technologies: TechnologiesType
}

export const experience: ExperienceType[] = [
  {
    datesRange: 'June 2023 - Present',
    role: 'Full Stack Web Developer',
    company: 'Freelance',
    description:
      "Delivering tailor-made web solutions that align with my clients' unique needs and goals. From captivating landing pages to robust web applications, I utilize the latest technologies to ensure functionality, responsiveness, and visual appeal.",
    technologies: [
      'HTML5',
      'CSS3',
      'SCSS',
      'JavaScript',
      'TypeScript',
      'React',
      'NextJS',
      'NodeJS',
      'Express',
      'MongoDB'
    ]
  },
  {
    datesRange: 'January 2023 - Present',
    role: 'Front-end Web Developer',
    company: 'Triskell Software',
    link: 'https://www.triskellsoftware.com/',
    description:
      "Collaborating with a talented team to develop a new web front-end using vanguard technologies, our goal is to replace the existing interface that's been in use for more than a decade. This ambitious project is designed to provide significant enhancements in performance, cost-effectiveness, and user-friendliness for Triskell's Project Portfolio Management software.",
    technologies: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'React']
  }
]
