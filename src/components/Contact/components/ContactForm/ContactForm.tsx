'use client'

import Button from '@/components/Button/Button'
import Checkbox from '@/components/Checkbox/Checkbox'
import Email from '@/components/Email/Email'
import Form from '@/components/Form/Form'
import H2 from '@/components/H2/H2'
import Input from '@/components/Input/Input'
import Link from '@/components/Link/Link'
import Textarea from '@/components/Textarea/Textarea'
import { render } from '@react-email/components'
import axios from 'axios'
import LeadEmail from 'emails/LeadEmail'
import { Dictionary } from 'i18n/get-dictionary'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { page } from 'utils/ClientLogic'

import s from './ContactForm.module.scss'

type Props = {
  dict: Dictionary
}

type FormValues = {
  email: string
  message: string
  privacyPolicyAccepted: boolean
}

const ContactForm = ({ dict }: Props) => {
  const methods = useForm<FormValues>({
    mode: 'onBlur',
    shouldUseNativeValidation: false,
    defaultValues: {
      email: '',
      message: '',
      privacyPolicyAccepted: false
    }
  })

  const [submitDisabled, setSubmitDisabled] = useState(false)

  const { placeholders, privacyPolicy, submit, toast: toastDict } = dict.contact

  const handleSubmit = (formValues: FormValues) => {
    setSubmitDisabled(true)

    const { email, message } = formValues
    const data = {
      ...formValues,
      pageId: page._id,
      sessionId: localStorage.getItem('sessionId'),
      userId: localStorage.getItem('userId')
    }
    const emailHTMLString = render(<LeadEmail {...{ email, message }} />)

    toast
      .promise(
        axios.post('/api/contacts', {
          data,
          emailHTMLString
        }),
        {
          pending: 'Sending...',
          success: {
            render: () => {
              const { title, description } = toastDict.success

              return (
                <div className="toast-content">
                  <H2 variant="toast">{title}</H2>
                  <p>{description}</p>
                </div>
              )
            },
            autoClose: 8000
          },
          error: {
            render: () => {
              const { title, description } = toastDict.error

              return (
                <div className="toast-content">
                  <H2 variant="toast-error">{title}</H2>
                  <p>
                    {description.part1} <Email /> {description.part2}
                  </p>
                </div>
              )
            },
            autoClose: 12000
          }
        }
      )
      .then(() => methods.reset())
      .finally(() => setSubmitDisabled(false))
  }

  const privacyPolicyLink = (
    <Link href="/privacy-policy" target="_blank" variant="solid">
      {privacyPolicy.anchor}
    </Link>
  )

  return (
    <Form<FormValues>
      {...{ methods }}
      onSubmit={handleSubmit}
      className={s['contact-form']}
    >
      <Input
        type="email"
        name="email"
        placeholder={placeholders.email}
        required
      />
      <Textarea
        name="message"
        placeholder={placeholders.message}
        validation="message"
        required
      />
      <Checkbox
        label={
          <span>
            {privacyPolicy.label} {privacyPolicyLink}.
          </span>
        }
        name="privacyPolicyAccepted"
        validation="privacyPolicy"
        required
      />
      <Button
        id="contactFormSubmitButton"
        variant="callToAction"
        disabled={submitDisabled}
        className={s['send-button']}
      >
        {submit}
      </Button>
    </Form>
  )
}

export default ContactForm
