'use client'

import { useFormContext } from 'react-hook-form'
import { getValidation } from 'utils/validation'

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
    <>
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
    </>
  )
}

export default Textarea
