import Image from 'next/image'
import Link from 'next/link'
import s from './Hero.module.scss'

const Hero = () => {
  const handleCallToAction = () => {}

  return (
    <header className={s['hero']}>
      <div className={s['text-container']}>
        <h1>Iker Romero</h1>
        <p>I help business in building a profesional landing page</p>
        <Link href="#contact">Let&apos;s Talk</Link>
      </div>
      <div>
        <Image
          className={s.image}
          width={500}
          height={375}
          src="/images/hero.png"
          alt="Hero image of a miniature representing robots building a website design in a big screen"
        />
      </div>
    </header>
  )
}

export default Hero
