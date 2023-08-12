import { ReactNode } from 'react'
import { FormProvider, UseFormReturn } from 'react-hook-form'

type Props = {
  children: ReactNode
  methods: UseFormReturn
  onSubmit: (fields: {}) => void
}

const Form = ({ children, methods, onSubmit }: Props) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

export default Form
