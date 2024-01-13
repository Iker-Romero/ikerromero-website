import H1 from '@/components/H1/H1'
import Link from '@/components/Link/Link'
import { Dictionary } from 'i18n/get-dictionary'
import Image from 'next/image'

import s from './Hero.module.scss'

type Props = {
  dict: Dictionary
}

const Hero = ({ dict }: Props) => {
  const { description } = dict.hero

  return (
    <section className={s['hero']}>
      <div id="heroContent" className={s.content}>
        <div className={s['text-container']}>
          <H1 variant="hero" className="hidden fadeInTop">
            Iker Romero
          </H1>
          <p className={'hidden fadeInRight'}>{description}</p>
        </div>
        <Link
          id="heroCTA"
          href="/contact"
          variant="callToAction"
          className="hidden fadeInLeft-333 delay-666"
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
