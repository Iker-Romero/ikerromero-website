import { Dictionary } from 'i18n/get-dictionary'

import Email from '../Email/Email'
import s from './Contact.module.scss'
import ContactForm from './components/ContactForm/ContactForm'

type Props = {
  variant?: 'page' | 'component'
  dict: Dictionary
}

const Contact = async ({ variant = 'component', dict }: Props) => {
  const Heading = variant === 'page' ? 'h1' : 'h2'

  return (
    <section id="contactSection" className={s['contact']}>
      <Heading>{dict.contact.title}</Heading>
      <p className={s[`description-${variant}-variant`]}>
        {dict.contact.description} <Email />.
      </p>
      <ContactForm {...{ dict }} />
    </section>
  )
}

export default Contact
