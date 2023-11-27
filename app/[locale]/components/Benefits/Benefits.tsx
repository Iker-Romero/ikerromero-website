import { Dictionary } from '../../../../get-dictionary'
import Compass from '../Icons/Compass'
import ShieldZap from '../Icons/ShieldZap'
import Telescope from '../Icons/Telescope'
import s from './Benefits.module.scss'

type Props = {
  dict: Dictionary
}

const icons = {
  SEO: Telescope,
  design: Compass,
  performance: ShieldZap
}

const Benefits = ({ dict }: Props) => {
  const { benefits } = dict

  return (
    <section id="benefitsSection" className={s['benefits-section']}>
      <ul className={s[`benefits-container`]}>
        {benefits.map(({ id, title, description }, i) => {
          const Icon = icons[id]

          return (
            <li
              className={`${s.benefit} hidden fadeInBottom ${
                i > 0 ? `delay-333 i-${i - 1}` : ''
              }`}
              key={i}
            >
              <div className={s['icon-container']}>
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Benefits
