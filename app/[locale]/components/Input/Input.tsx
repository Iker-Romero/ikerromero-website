'use client'

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import { useFormContext } from 'react-hook-form'
import { getValidation } from 'utils/validation'

import s from './Input.module.scss'

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
    <div className={s[`input-container`]}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        {...{ id, type, placeholder }}
        {...(name && type && register
          ? register(name, getValidation({ type, required }))
          : {})}
        className={s.input}
      />
      <ErrorMessage {...{ name }} />
    </div>
  )
}

export default Input
