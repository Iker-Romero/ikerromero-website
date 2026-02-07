import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { MouseEvent, ReactNode } from 'react'

const buttonVariants = cva(
  'px-4 w-fit border-none rounded-md flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        callToAction:
          'shimmer bg-accent-gold text-primary-dark font-bold transition-[background,transform] duration-200 hover:bg-accent-orange hover:scale-105'
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
      className={cn(buttonVariants({ variant }), className)}
      {...{ onClick, disabled, id }}
    >
      {children}
    </button>
  )
}

export default Button
