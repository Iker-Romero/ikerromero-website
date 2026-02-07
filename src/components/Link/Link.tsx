import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Link as NextIntlLink } from 'navigation'
import { LinkProps } from 'next/link'
import { ReactNode } from 'react'

const linkVariants = cva('text-center', {
  variants: {
    variant: {
      callToAction:
        'shimmer px-4 h-12 rounded-3xl flex items-center justify-center font-bold bg-accent-gold text-primary-dark hover:bg-accent-orange hover:border-accent-orange hover:scale-105 transition-[border-color,transform] duration-300',
      callToActionSecondary:
        'px-4 h-12 rounded-3xl flex items-center justify-center font-bold border-[3px] border-accent-gold hover:border-accent-orange hover:scale-105 transition-[border-color,transform] duration-300',
      heading: 'text-accent-gold',
      logo: 'text-accent-gold font-bold whitespace-nowrap text-[2rem]',
      logoSmall:
        'text-accent-gold font-bold text-lg h-fit my-[0.5625rem]',
      small:
        'text-text-dark text-sm py-1.5 flex gap-3.5 items-center hover:text-text-medium hover:underline hover:underline-offset-[0.125rem] hover:decoration-text-medium hover:decoration-solid hover:decoration-[0.0625rem]',
      underlined:
        'underline underline-offset-4 decoration-text-light decoration-solid decoration-2 hover:text-text-medium hover:decoration-text-medium',
      solid:
        'text-text-dark hover:text-text-medium hover:underline hover:underline-offset-[0.125rem] hover:decoration-text-medium hover:decoration-solid hover:decoration-[0.0625rem]'
    }
  }
})

interface Props extends LinkProps, VariantProps<typeof linkVariants> {
  children: ReactNode
  target?: '_blank' | '_self' | '_parent' | '_top' | string
  className?: string
  id?: string
}

const Link = ({ children, href, variant, target, className, id }: Props) => {
  return (
    <NextIntlLink
      className={cn(linkVariants({ variant }), className)}
      {...{ href, target, id }}
    >
      {children}
    </NextIntlLink>
  )
}

export default Link
