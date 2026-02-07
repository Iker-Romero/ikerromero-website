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
              className={`p-4 shadow-[rgb(18,33,43)_0px_5px_15px_0px] rounded-2xl relative top-0 transition-[transform,top,box-shadow] duration-[250ms] ease-in-out min-w-[12.5rem] max-w-[18.75rem] basis-[12.5rem] grow flex flex-col items-center hover:-top-4 animate-hidden fadeInBottom ${
                i > 0 ? `delay-333 i-${i - 1}` : ''
              }`}
              key={i}
            >
              <div className="flex justify-center items-center w-16 aspect-square text-accent-gold [&_svg]:w-full [&_svg]:h-full">
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
