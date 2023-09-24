import { TechnologiesType } from '@/components/Experience/data'

import s from './Technologies.module.scss'

type Props = {
  technologies: TechnologiesType
}

const Technologies = ({ technologies }: Props) => {
  return (
    <div className={s.technologies}>
      {technologies.map(techName => (
        <span key={techName} className={s.technology}>
          {techName}
        </span>
      ))}
    </div>
  )
}

export default Technologies
