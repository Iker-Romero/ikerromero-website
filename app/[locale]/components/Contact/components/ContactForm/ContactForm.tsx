'use client'

import Button from '@/components/Button/Button'
import Checkbox from '@/components/Checkbox/Checkbox'
import Email from '@/components/Email/Email'
import Form from '@/components/Form/Form'
import H2 from '@/components/H2/H2'
import Input from '@/components/Input/Input'
import Link from '@/components/Link/Link'
import Textarea from '@/components/Textarea/Textarea'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Dictionary } from '../../../../../../get-dictionary'
import s from './ContactForm.module.scss'

type Props = {
  dict: Dictionary
}

type FormValues = {
  name: string
  email: string
  message: string
  privacyPolicyAccepted: boolean
}

const ContactForm = ({ dict }: Props) => {
  const methods = useForm<FormValues>({
    mode: 'onBlur',
    shouldUseNativeValidation: false,
    defaultValues: {
      name: '',
      email: '',
      message: '',
      privacyPolicyAccepted: false
    }
  })

  const [submitDisabled, setSubmitDisabled] = useState(false)

  const { placeholders, privacyPolicy, submit, toast: toastDict } = dict.contact

  const handleSubmit = (data: FormValues) => {
    setSubmitDisabled(true)

    toast
      .promise(axios.post('/api/contacts', data), {
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
      })
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
        name="name"
        placeholder={placeholders.name}
        validation="name"
        required
      />
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
        required
        validation="privacyPolicy"
      />
      <Button
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
