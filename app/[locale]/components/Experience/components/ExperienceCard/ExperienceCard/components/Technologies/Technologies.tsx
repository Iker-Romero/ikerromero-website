import { TechnologiesType } from '@/components/Experience/data'

import s from './Technologies.module.scss'

type Props = {
  technologies: TechnologiesType
}

const Technologies = ({ technologies }: Props) => {
  return (
    <div className={s.technologies}>
      {technologies.map((techName, i) => (
        <span
          key={techName}
          className={s.technology + ` hidden fadeInLeft-100 i-${i} delay-1000`} // Delay class to pass the value to the SCSS and handle the extra time, avoiding collision with the parent transition
        >
          {techName}
        </span>
      ))}
    </div>
  )
}

export default Technologies
