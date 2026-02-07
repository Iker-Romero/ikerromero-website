import H1 from '@/components/H1/H1'
import Link from '@/components/Link/Link'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Hero = () => {
  const t = useTranslations()

  return (
    <section className="flex flex-wrap w-full justify-center items-center mt-6 landscape:mt-[4.5rem] landscape:mb-4">
      <div id="heroContent" className="flex flex-col max-w-[40rem] flex-[3_1_60%] px-4 pb-4 pt-1 gap-8">
        <div className="flex flex-col gap-4">
          <H1 variant="hero" className="animate-hidden fadeInTop">
            Iker Romero
          </H1>
          <p className="animate-hidden fadeInRight">{t('hero.description')}</p>
        </div>
        <Link
          id="heroCTA"
          href="/contact"
          variant="callToAction"
          className="animate-hidden fadeInLeft-333 delay-666"
        >
          {t('contact.CTA')}
        </Link>
      </div>
      <div className="flex-[2_1_40%] min-w-[20rem] max-w-[25rem] aspect-[4/3]">
        <Image
          priority
          className="object-contain w-full h-full animate-hidden scaleInFromLeftBottom"
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
