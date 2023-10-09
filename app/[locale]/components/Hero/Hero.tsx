import Image from 'next/image'

import { Dictionary } from '../../../../get-dictionary'
import H1 from '../H1/H1'
import Link from '../Link/Link'
import s from './Hero.module.scss'

type Props = {
  dict: Dictionary
}

const Hero = ({ dict }: Props) => {
  const { description } = dict.hero

  return (
    <section className={s['hero']}>
      <div className={s.content}>
        <div className={s['text-container']}>
          <H1 variant="hero" className="hidden fadeInDown">
            Iker Romero
          </H1>
          <p className={'hidden fadeInRight'}>{description}</p>
        </div>
        <Link
          href="/contact"
          variant="callToAction"
          id="heroCTA"
          className="hidden fadeInLeft-300 delay-700"
        >
          {dict.contact.CTA}
        </Link>
      </div>
      <div className={s['image-wrapper']}>
        <Image
          priority
          className={s.image + ' hidden scaleInFromLeftBottom'}
          width={500}
          height={375}
          src="/images/rocket.webp"
          alt="Minimalist cartoon illustration of a rocket taking off"
        />
      </div>
    </section>
  )
}

export default Hero
