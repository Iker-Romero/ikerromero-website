import Card from '@/components/Card/Card'
import { getMessages } from 'i18n'
import { getLocale } from 'next-intl/server'

import Compass from '../Icons/Compass'
import ShieldZap from '../Icons/ShieldZap'
import Telescope from '../Icons/Telescope'

const icons = {
  SEO: Telescope,
  design: Compass,
  performance: ShieldZap
}

const Benefits = async () => {
  const locale = await getLocale()
  const messages = await getMessages(locale)

  return (
    <section id="benefitsSection" className="text-text-light">
      <ul className="flex gap-6 flex-wrap justify-center">
        {messages.benefits.map(({ id, title, description }, i) => {
          const Icon = icons[id]

          return (
            <li
              className="min-w-50 max-w-75 basis-50 grow flex transition-transform duration-250 ease-out hover:-translate-y-4"
              key={i}
            >
              <Card
                className={`w-full animate-hidden fadeInBottom ${
                  i > 0 ? `delay-333 i-${i - 1}` : ''
                }`}
              >
                <div className="flex justify-center items-center w-16 aspect-square text-accent-gold [&_svg]:w-full [&_svg]:h-full">
                  <Icon />
                </div>
                <h2 className="my-4">{title}</h2>
                <p>{description}</p>
              </Card>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Benefits
