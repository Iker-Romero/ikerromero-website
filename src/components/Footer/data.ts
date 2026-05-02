import { EMAIL } from 'consts'
import { ComponentType } from 'react'

import GitHub from '../Icons/GitHub'
import LinkedIn from '../Icons/LinkedIn'

export const aboutMeLinks: {
  name: string
  icon?: ComponentType<{ className?: string }>
  link: string
}[] = [
  {
    name: 'LinkedIn',
    icon: LinkedIn,
    link: 'https://www.linkedin.com/in/ikerromerodev'
  },
  {
    name: 'GitHub',
    icon: GitHub,
    link: 'https://github.com/Iker-Romero'
  },
  {
    name: EMAIL,
    link: `mailto:${EMAIL}`
  }
]

export const legalPaths = [
  { id: 1, link: '/terms' },
  { id: 2, link: '/privacy-policy' }
]
