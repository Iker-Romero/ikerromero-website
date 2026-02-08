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
    <section id="benefitsSection" className="text-text-light my-4 mb-8">
      <ul className="flex gap-6 flex-wrap justify-center">
        {messages.benefits.map(({ id, title, description }, i) => {
          const Icon = icons[id]

          return (
            <li
              className="min-w-[12.5rem] max-w-[18.75rem] basis-[12.5rem] grow flex list-none transition-transform duration-[250ms] ease-out hover:-translate-y-4"
              key={i}
            >
              <div
                className={`p-4 w-full shadow-[0_5px_15px_0_#12212b] rounded-2xl flex flex-col items-center animate-hidden fadeInBottom ${
                  i > 0 ? `delay-333 i-${i - 1}` : ''
                }`}
              >
                <div className="flex justify-center items-center w-16 aspect-square text-accent-gold [&_svg]:w-full [&_svg]:h-full">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Benefits
