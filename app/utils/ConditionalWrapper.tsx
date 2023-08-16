import { ReactNode } from 'react'

type Props = {
  children: React.ReactNode
  condition: boolean
  wrapper: (children: ReactNode) => ReactNode
}

const ConditionalWrapper = ({ children, condition, wrapper }: Props) => {
  return condition ? wrapper(children) : children
}

export default ConditionalWrapper
