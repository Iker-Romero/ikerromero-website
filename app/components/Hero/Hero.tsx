import Image from 'next/image'

import Link from '../Link/Link'
import s from './Hero.module.scss'

const Hero = () => {
  return (
    <header className={s['hero']}>
      <div className={s['text-container']}>
        <h1>Iker Romero</h1>
        <div className={s.content}>
          <p>
            Transforming Ideas into Digital Realities. Whether you need a
            stunning landing page or a complex web application, I create
            solutions that fit your vision. Let&apos;s build something
            extraordinary together.
          </p>
          <Link href="/contact" variant="callToAction">
            Let&apos;s Talk
          </Link>
        </div>
      </div>
      <div className={s['image-wrapper']}>
        <Image
          priority
          className={s.image}
          width={500}
          height={375}
          src="/svg/rocket.svg"
          alt="Hero image of a miniature representing robots building a website design in a big screen"
        />
      </div>
    </header>
  )
}

export default Hero
