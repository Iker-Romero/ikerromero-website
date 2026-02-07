import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import React from 'react'

type Props = { name?: string; label?: string; id?: string }

const FieldContainer = ({ name, label, id }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={id}>{label}</label>}
      <ErrorMessage {...{ name }} />
    </div>
  )
}

export default FieldContainer
