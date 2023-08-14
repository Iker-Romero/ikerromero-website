import { ReactNode } from 'react'
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn
} from 'react-hook-form'

type Props<TFieldValues extends FieldValues> = {
  children: ReactNode
  methods: UseFormReturn<TFieldValues>
  onSubmit: SubmitHandler<TFieldValues>
}

const Form = <TFieldValues extends FieldValues>({
  children,
  methods,
  onSubmit
}: Props<TFieldValues>) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

export default Form
