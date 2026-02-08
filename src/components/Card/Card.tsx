import { Badge } from '@/components/Badge'
import { TechnologiesType } from '@/components/Experience/data'
import Link from '@/components/Link/Link'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

import Technologies from './components/Technologies/Technologies'

const IMAGE_CONFIG = {
  project: {
    width: 430,
    height: 300,
    sizes:
      '(max-width: 640px) calc(100vw - 2rem), (max-width: 900px) calc(50vw - 2rem), 430px',
    containerClass: 'rounded-lg overflow-hidden max-h-[300px] max-w-[430px]'
  },
  experience: {
    width: 868,
    height: 300,
    sizes: '(max-width: 900px) calc(100vw - 2rem), 868px',
    containerClass: 'rounded-lg overflow-hidden max-h-[300px]'
  }
} as const

type Variant = keyof typeof IMAGE_CONFIG

type Props = {
  image?: string
  variant?: Variant
  title: string
  subtitle?: string
  badge?: string
  description: string
  technologies: TechnologiesType
  link?: string
}

const Card = ({
  image,
  variant,
  title,
  subtitle,
  badge,
  description,
  technologies,
  link
}: Props) => {
  const imageConfig = variant ? IMAGE_CONFIG[variant] : undefined

  return (
    <div className="flex flex-col gap-4 animate-hidden fadeInRight">
      {image && imageConfig && (
        <div className={imageConfig.containerClass}>
          <Image
            src={image}
            alt={title}
            width={imageConfig.width}
            height={imageConfig.height}
            sizes={imageConfig.sizes}
            className="w-full h-auto object-cover object-top"
          />
        </div>
      )}
      <div className="flex flex-col gap-3">
        {subtitle && <span className="text-sm opacity-70">{subtitle}</span>}
        <h3 className="inline-flex gap-3 flex-wrap leading-none">
          {link ? (
            <Link href={link} target="_blank" variant="heading">
              {title}
              <ExternalLink className="inline ml-2 h-5 w-5 align-[-0.1em]" />
            </Link>
          ) : (
            title
          )}
          {badge && (
            <Badge colorScheme="yellow" appearance="bordered" size="sm">
              {badge}
            </Badge>
          )}
        </h3>
        <p>{description}</p>
        <Technologies technologies={technologies} />
      </div>
    </div>
  )
}

export default Card
