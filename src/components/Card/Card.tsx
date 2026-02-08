import { Badge } from '@/components/Badge'
import { TechnologiesType } from '@/components/Experience/data'
import Link from '@/components/Link/Link'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

import Technologies from './components/Technologies/Technologies'

type Props = {
  image?: string
  imageSizes?: string
  title: string
  subtitle?: string
  badge?: string
  description: string
  technologies: TechnologiesType
  link?: string
}

const Card = ({
  image,
  imageSizes,
  title,
  subtitle,
  badge,
  description,
  technologies,
  link
}: Props) => {
  return (
    <div className="flex flex-col gap-4 animate-hidden fadeInRight">
      {image && (
        <div className="rounded-lg overflow-hidden max-h-[300px]">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            sizes={imageSizes}
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
