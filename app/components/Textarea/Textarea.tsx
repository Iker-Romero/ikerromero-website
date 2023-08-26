'use client'

import { useFormContext } from 'react-hook-form'
import { getValidation } from 'utils/validation'

import ErrorMessage from '../ErrorMessage/ErrorMessage'
import s from './Textarea.module.scss'

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
    <div className={s['textarea-container']}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        {...{ id, placeholder }}
        {...(name && register
          ? register(
              name,
              getValidation({ validation, type: 'textarea', required })
            )
          : {})}
        className={s.textarea}
      />
      <ErrorMessage {...{ name }} />
    </div>
  )
}

export default Textarea
