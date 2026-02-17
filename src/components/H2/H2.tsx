import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const variantClasses = {
  footer: 'text-sm font-medium text-text-light h-6 inline-flex items-center',
  toast: 'text-base font-semibold',
  'toast-error': 'text-base font-semibold text-error-light'
} as const

type Props = {
  variant?: keyof typeof variantClasses
  children: ReactNode
}

const H2 = ({ variant, children }: Props) => {
  return <h2 className={cn(variant && variantClasses[variant])}>{children}</h2>
}

export default H2
