'use client'

import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { getValidation } from 'utils/validation'

import ErrorMessage from '../ErrorMessage/ErrorMessage'
import s from './Checkbox.module.scss'

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
    <div className={s['error-container']}>
      <div className={s['label-container']}>
        <input
          className={s.checkbox}
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
          <label className={s.label} htmlFor={id}>
            {label}
          </label>
        )}
      </div>
      <ErrorMessage {...{ name }} />
    </div>
  )
}

export default Checkbox
