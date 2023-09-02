'use client'

import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'
import Form from '../Form/Form'
import H2 from '../H2/H2'
import Input from '../Input/Input'
import Link from '../Link/Link'
import Textarea from '../Textarea/Textarea'
import s from './Contact.module.scss'
import { toastOptions } from './data'

type FormValues = {
  name: string
  email: string
  phone?: string
  message: string
  privacyPolicyAccepted: boolean
}

type Props = {
  variant?: 'page' | 'component'
}

const Contact = ({ variant = 'component' }: Props) => {
  const methods = useForm<FormValues>({
    mode: 'onBlur',
    shouldUseNativeValidation: false,
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      privacyPolicyAccepted: false
    }
  })

  const [submitDisabled, setSubmitDisabled] = useState(false)

  const handleSubmit = (data: FormValues) => {
    setSubmitDisabled(true)

    const { success, error } = toastOptions

    toast
      .promise(axios.post('/api/contacts', data), {
        pending: 'Sending...',
        success: {
          render: () => (
            <div className="toast-content">
              <H2 variant="toast">{success.title}</H2>
              <p>{success.description}</p>
            </div>
          ),
          autoClose: success.duration
        },
        error: {
          render: () => (
            <div className="toast-content">
              <H2 variant="toast-error">{error.title}</H2>
              <p>{error.description}</p>
            </div>
          ),
          autoClose: error.duration
        }
      })
      .then(() => methods.reset())
      .finally(() => setSubmitDisabled(false))
  }

  const Heading = variant === 'page' ? 'h1' : 'h2'

  const privacyPolicyLink = (
    <Link href="/privacy-policy" target="_blank" variant="solid">
      privacy policy
    </Link>
  )

  return (
    <section className={s['contact']}>
      <Heading>Contact</Heading>
      <Form<FormValues>
        {...{ methods }}
        onSubmit={handleSubmit}
        className={s['contact-form']}
      >
        <Input name="name" placeholder="Name" validation="name" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="tel" name="phone" placeholder="Phone (optional)" />
        <Textarea
          name="message"
          placeholder="Message"
          validation="message"
          required
        />
        <Checkbox
          label={<span>I accept the {privacyPolicyLink}</span>}
          name="privacyPolicyAccepted"
          required
          validation="privacyPolicy"
        />
        <Button variant="callToAction" disabled={submitDisabled}>
          Send
        </Button>
      </Form>
    </section>
  )
}

export default Contact
