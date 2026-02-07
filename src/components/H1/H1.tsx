import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type Props = {
  variant?: 'hero'
  className?: string
  children: ReactNode
}

const H1 = ({ variant, className, children }: Props) => {
  return (
    <h1 className={cn(variant === 'hero' && '!m-0', className)}>
      {children}
    </h1>
  )
}

export default H1
