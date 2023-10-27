import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { EMAIL } from 'consts'

export const aboutMeLinks = [
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/iker-romero-645b70251/'
  },
  {
    name: 'GitHub',
    icon: faGithub,
    link: 'https://github.com/Iker-Romero'
  },
  {
    name: EMAIL,
    link: `mailto:${EMAIL}`
  }
]

export const legalLinks = [
  { id: 1, link: '/terms' },
  { id: 2, link: '/privacy-policy' }
]
