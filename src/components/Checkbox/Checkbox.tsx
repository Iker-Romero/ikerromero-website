'use client'

import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { getValidation } from 'utils/validation'

import ErrorMessage from '../ErrorMessage/ErrorMessage'

type Props = {
  name: string
  label: string | ReactNode
  validation?: 'privacyPolicy'
  required?: boolean
  id?: string
}

const Checkbox = ({ name, required, id: idProp, label, validation }: Props) => {
  const { register } = useFormContext()

  const id = idProp || name

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center">
        <input
          className="custom-checkbox"
          type="checkbox"
          {...{ id }}
          {...(name && register
            ? register(
                name,
                getValidation({ validation, type: 'checkbox', required })
              )
            : {})}
        />
        {label && (
          <label htmlFor={id}>
            {label}
          </label>
        )}
      </div>
      <ErrorMessage {...{ name }} />
    </div>
  )
}

export default Checkbox
