'use client'

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import { useFormContext } from 'react-hook-form'
import { getValidation } from 'utils/validation'

type Props = {
  type?: 'email'
  id?: string
  name?: string
  placeholder?: string
  label?: string
  required?: boolean
}

const Input = ({
  type,
  id: idProp,
  name,
  placeholder,
  label,
  required
}: Props) => {
  const { register } = useFormContext() || {}

  const id = idProp || name

  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        {...{ id, type, placeholder }}
        {...(name && type && register
          ? register(name, getValidation({ type, required }))
          : {})}
        className="w-full py-2 px-4 bg-primary-dark text-text-light border-none rounded-md placeholder:text-text-dark"
      />
      <ErrorMessage {...{ name }} />
    </div>
  )
}

export default Input
