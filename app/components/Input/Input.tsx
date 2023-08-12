'use client'
import { RegisterOptions, useFormContext } from 'react-hook-form'
import { getValidation } from '@/app/utils/validation'
import s from './Input.module.scss'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

type Props = {
  type?: 'text' | 'email' | 'tel'
  id?: string
  name?: string
  placeholder?: string
  label?: string
  required?: boolean
  validation?: 'name'
}

const Input = ({
  type = 'text',
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
    <div className={s[`field-container`]}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        {...{ type, id, placeholder }}
        {...(name && register
          ? register(name, getValidation({ validation, type, required }))
          : {})}
      />
      <ErrorMessage {...{ name }} />
    </div>
  )
}

export default Input
