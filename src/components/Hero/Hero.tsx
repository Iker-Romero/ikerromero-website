import H1 from '@/components/H1/H1'
import Link from '@/components/Link/Link'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Hero = () => {
  const t = useTranslations()

  return (
    <section className="flex flex-wrap w-full justify-center items-center">
      <div
        id="heroContent"
        className="flex flex-col max-w-160 flex-[3_1_60%] px-4 pb-4 pt-1 gap-8"
      >
        <div className="flex flex-col gap-4">
          <H1 className="animate-hidden fadeInTop">Iker Romero</H1>
          <p className="animate-hidden fadeInRight">{t('hero.description')}</p>
        </div>
        <div className="animate-hidden fadeInLeft-333 delay-666">
          <Link id="heroCTA" href="/contact" variant="callToAction">
            {t('contact.CTA')}
          </Link>
        </div>
      </div>
      <div className="flex-[2_1_40%] min-w-[20rem] max-w-100 aspect-4/3">
        <Image
          priority
          className="object-contain w-full h-full animate-hidden scaleInFromLeftBottom"
          width={500}
          height={375}
          sizes="(max-width: 768px) calc(100vw - 2rem), 400px"
          src="/images/rocket.webp"
          alt="Minimalist cartoon illustration of a rocket taking off"
        />
      </div>
    </section>
  )
}

export default Hero
