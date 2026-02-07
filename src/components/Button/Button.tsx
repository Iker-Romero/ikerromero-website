import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { MouseEvent, ReactNode } from 'react'

export const buttonVariants = cva(
  'px-4 h-12 rounded-3xl flex items-center justify-center font-bold',
  {
    variants: {
      variant: {
        callToAction:
          'shimmer bg-accent-gold text-primary-dark hover:bg-accent-orange hover:scale-105 transition-[background,transform] duration-300',
        callToActionSecondary:
          'border-[3px] border-accent-gold hover:border-accent-orange hover:scale-105 transition-[border-color,transform] duration-300'
      }
    },
    defaultVariants: { variant: 'callToAction' }
  }
)

interface Props extends VariantProps<typeof buttonVariants> {
  children: ReactNode
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  className?: string
  id?: string
}

const Button = ({
  children,
  variant = 'callToAction',
  onClick,
  disabled,
  className,
  id
}: Props) => {
  return (
    <button
      className={cn(
        'w-fit cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        variant !== 'callToActionSecondary' && 'border-none',
        buttonVariants({ variant }),
        className
      )}
      {...{ onClick, disabled, id }}
    >
      {children}
    </button>
  )
}

export default Button
