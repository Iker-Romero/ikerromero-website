import { getMessages } from 'i18n'
import { getLocale, getTranslations } from 'next-intl/server'

import Email from '../Email/Email'
import ContactForm from './components/ContactForm/ContactForm'

type Props = {
  variant?: 'page' | 'component'
}

const Contact = async ({ variant = 'component' }: Props) => {
  const t = await getTranslations('contact')
  const locale = await getLocale()
  const messages = await getMessages(locale)

  const { toast, privacyPolicy, placeholders, submit } = messages.contact

  const Heading = variant === 'page' ? 'h1' : 'h2'

  return (
    <section
      id="contactSection"
      className="max-w-[20rem] mx-auto flex flex-col"
    >
      <Heading className="mb-3">{t('title')}</Heading>
      <p className="mb-4">
        {t('description')} <Email />.
      </p>
      <ContactForm {...{ toast, privacyPolicy, placeholders, submit }} />
    </section>
  )
}

export default Contact
