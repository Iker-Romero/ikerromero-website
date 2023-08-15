'use client'

import axios from 'axios'
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
    mode: 'onChange',
    shouldUseNativeValidation: false,
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  })

  const handleSubmit = (data: FormValues) => {
    axios.post('/api/contacts', data).then(res => {
      console.log('res', res)
      // TO-DO: Add a toast to notify the user that the message was sent

      // TO-DO: Clear the form

      // TO-DO: Send an email to my professional email
    })
  }

  return (
    <section className={s['contact-form']}>
      <h2>Contact</h2>
      {/* TO-DO: directly provide my contact information (email, phone, location) */}
      <Form<FormValues> {...{ methods }} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Name" validation="name" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="tel" name="phone" placeholder="Phone" />
        <Textarea
          name="message"
          placeholder="Message"
          validation="message"
          required
        />
        <Button variant="callToAction">Send</Button>
      </Form>
    </section>
  )
}

export default Contact
