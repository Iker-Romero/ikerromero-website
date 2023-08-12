import React from 'react'
import s from './FieldContainer.module.scss'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

type Props = { name?: string; label?: string; id?: string }

const FieldContainer = ({ name, label, id }: Props) => {
  return (
    <div className={s[`field-container`]}>
      {label && <label htmlFor={id}>{label}</label>}
      <ErrorMessage {...{ name }} />
    </div>
  )
}

export default FieldContainer
