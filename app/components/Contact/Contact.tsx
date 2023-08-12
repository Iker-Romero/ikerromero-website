'use client'
import { useForm } from 'react-hook-form'
import s from './Contact.module.scss'
import Button from '../Button/Button'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'

const Contact = () => {
  const methods = useForm({
    mode: 'onChange',
    shouldUseNativeValidation: false,
    defaultValues: {}
  })

  const handleSubmit = (fields: {}) => {
    console.log('fields', fields)
  }

  return (
    <section>
      <h2>Contact</h2>
      <Form {...{ methods }} onSubmit={handleSubmit}>
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
