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
import LeadEmail from 'emails/LeadEmail'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { axiosClient } from 'services/axiosClient'

type FormValues = {
  email: string
  message: string
  privacyPolicyAccepted: boolean
}

type Props = {
  toast: {
    success: {
      title: string
      description: string
    }
    error: {
      title: string
      description: {
        part1: string
        part2: string
      }
    }
  }
  privacyPolicy: {
    label: string
    anchor: string
  }
  placeholders: {
    email: string
    message: string
  }
  submit: string
}

const ContactForm = ({
  toast: toastMessages,
  privacyPolicy,
  placeholders,
  submit
}: Props) => {
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

  const handleSubmit = (formValues: FormValues) => {
    setSubmitDisabled(true)

    const { email, message } = formValues
    const data = { ...formValues }
    const emailHTMLString = render(<LeadEmail {...{ email, message }} />)

    toast
      .promise(
        axiosClient.post('/api/contacts', {
          data,
          emailHTMLString
        }),
        {
          pending: 'Sending...',
          success: {
            render: () => (
              <div className="toast-content">
                <H2 variant="toast">{toastMessages.success.title}</H2>
                <p>{toastMessages.success.description}</p>
              </div>
            ),
            autoClose: 8000
          },
          error: {
            render: () => (
              <div className="toast-content">
                <H2 variant="toast-error">{toastMessages.error.title}</H2>
                <p>
                  {toastMessages.error.description.part1} <Email />{' '}
                  {toastMessages.error.description.part2}
                </p>
              </div>
            ),
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
    <>
      <Form<FormValues>
        {...{ methods }}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full"
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
          className="self-center min-w-[50%]"
        >
          {submit}
        </Button>
      </Form>
      <ToastContainer />
    </>
  )
}

export default ContactForm
