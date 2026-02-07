import { ComponentType } from 'react'

import { EMAIL } from 'consts'

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
    link: 'https://www.linkedin.com/in/iker-romero-645b70251/'
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
