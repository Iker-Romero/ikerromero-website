import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const badgeVariants = cva('inline-flex items-center font-medium gap-1.5', {
  variants: {
    shape: {
      rounded: 'rounded-md',
      pill: 'rounded-full'
    },
    appearance: {
      bordered: 'ring-1 ring-inset',
      flat: ''
    },
    size: {
      xs: 'text-xs px-1.5 py-0.5 h-5',
      sm: 'text-xs px-2 py-1 h-6'
    },
    colorScheme: {
      gray: '',
      yellow: ''
    }
  },
  compoundVariants: [
    // Bordered gray
    {
      appearance: 'bordered',
      colorScheme: 'gray',
      className: 'bg-badge-gray text-badge-gray-text ring-badge-gray-ring'
    },
    // Bordered yellow
    {
      appearance: 'bordered',
      colorScheme: 'yellow',
      className: 'bg-badge-yellow text-badge-yellow-text ring-badge-yellow-ring'
    },
    // Flat gray
    {
      appearance: 'flat',
      colorScheme: 'gray',
      className: 'bg-badge-flat-gray text-badge-gray-text'
    },
    // Flat yellow
    {
      appearance: 'flat',
      colorScheme: 'yellow',
      className: 'bg-badge-flat-yellow text-badge-yellow-text'
    }
  ],
  defaultVariants: {
    shape: 'rounded',
    appearance: 'bordered',
    size: 'sm',
    colorScheme: 'gray'
  }
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  shape,
  appearance,
  size,
  colorScheme,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ shape, appearance, size, colorScheme }),
        className
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
