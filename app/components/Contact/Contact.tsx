'use client'

import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../Button/Button'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'
import s from './Contact.module.scss'

type FormValues = {
  name: string
  email: string
  phone?: string
  message: string
}

const Contact = () => {
  const methods = useForm<FormValues>({
    mode: 'onBlur',
    shouldUseNativeValidation: false,
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  })

  const [submitDisabled, setSubmitDisabled] = useState(false)

  const handleSubmit = (data: FormValues) => {
    setSubmitDisabled(true)

    axios
      .post('/api/contacts', data)
      .then(res => {
        console.log('res', res)
        // TO-DO: Add a toast to notify the user that the message was sent

        // TO-DO: Clear the form
      })
      .catch(error => console.error(error))
      .finally(() => setSubmitDisabled(false))
  }

  return (
    <section className={s['contact']}>
      <h2 className={s.header}>Contact</h2>
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
        <Button variant="callToAction" disabled={submitDisabled}>
          Send
        </Button>
      </Form>
    </section>
  )
}

export default Contact
