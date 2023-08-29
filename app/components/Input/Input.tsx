'use client'

import { useFormContext } from 'react-hook-form'
import { getValidation } from 'utils/validation'

import ErrorMessage from '../ErrorMessage/ErrorMessage'
import s from './Input.module.scss'

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
    <div className={s[`input-container`]}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        {...{ id, type, placeholder }}
        {...(name && register
          ? register(name, getValidation({ validation, type, required }))
          : {})}
        className={s.input}
      />
      <ErrorMessage {...{ name }} />
    </div>
  )
}

export default Input
