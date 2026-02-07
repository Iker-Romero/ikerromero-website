import { useFormContext } from 'react-hook-form'

type Props = { name?: string }

const ErrorMessage = ({ name }: Props) => {
  const {
    formState: { errors }
  } = useFormContext() || {}

  const error = name && errors?.[name]

  if (error) return <span className="text-error-medium">{error.message?.toString()}</span>
}

export default ErrorMessage
