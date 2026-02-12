import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

const H1 = ({ className, children }: Props) => {
  return (
    <h1 className={cn(className)}>
      {children}
    </h1>
  )
}

export default H1
