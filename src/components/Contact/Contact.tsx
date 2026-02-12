import { cn } from '@/lib/utils'
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
    <section id="contactSection" className="max-w-[20rem] mx-auto flex flex-col">
      <Heading className="mb-2">{t('title')}</Heading>
      <p className={cn(variant === 'component' ? 'mb-4' : 'mb-8')}>
        {t('description')} <Email />.
      </p>
      <ContactForm {...{ toast, privacyPolicy, placeholders, submit }} />
    </section>
  )
}

export default Contact
