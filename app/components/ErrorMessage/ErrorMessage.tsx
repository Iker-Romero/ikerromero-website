import { useFormContext } from 'react-hook-form'

import s from './ErrorMessage.module.scss'

type Props = { name?: string }

const ErrorMessage = ({ name }: Props) => {
  const {
    formState: { errors }
  } = useFormContext() || {}

  const error = name && errors?.[name]

  if (error) return <span className={s.error}>{error.message?.toString()}</span>
}

export default ErrorMessage
