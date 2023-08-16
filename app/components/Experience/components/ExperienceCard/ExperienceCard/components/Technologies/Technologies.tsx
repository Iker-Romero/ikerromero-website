import { TechnologiesType } from '@/components/Experience/data'

import s from './Technologies.module.scss'

type Props = {
  technologies: TechnologiesType
}

const Technologies = ({ technologies }: Props) => {
  return (
    <ul className={s.technologies}>
      {technologies.map(techName => (
        <li key={techName} className={s.technology}>
          {techName}
        </li>
      ))}
    </ul>
  )
}

export default Technologies
