import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLDivElement>

function Card({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        'rounded-2xl shadow-[0_5px_15px_0_var(--color-primary-dark)] p-4 flex flex-col items-center',
        className
      )}
      {...props}
    />
  )
}

export default Card
