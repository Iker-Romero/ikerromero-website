'use client'

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import { useFormContext } from 'react-hook-form'
import { getValidation } from 'utils/validation'

type Props = {
  id?: string
  name?: string
  placeholder?: string
  label?: string
  required?: boolean
  validation?: 'message'
}

const Textarea = ({
  id: idProp,
  name,
  placeholder,
  label,
  required,
  validation
}: Props) => {
  const { register } = useFormContext() || {}

  const id = idProp || name

  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        {...{ id, placeholder }}
        {...(name && register
          ? register(
              name,
              getValidation({ validation, type: 'textarea', required })
            )
          : {})}
        className="w-full h-40 py-2 px-4 bg-primary-dark text-text-light border-none rounded-md placeholder:text-text-dark"
      />
      <ErrorMessage {...{ name }} />
    </div>
  )
}

export default Textarea
