import { TechnologiesType } from '@/components/Experience/data'
import Link from '@/components/Link/Link'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

import Technologies from './components/Technologies/Technologies'

type Props = {
  image?: string
  title: string
  subtitle?: string
  badge?: string
  description: string
  technologies: TechnologiesType
  link?: string
}

const Card = ({
  image,
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
            sizes="(max-width: 900px) 100vw, 900px"
            className="w-full h-auto object-cover object-top"
          />
        </div>
      )}
      <div className="flex flex-col gap-3">
        {subtitle && <span className="text-sm opacity-70">{subtitle}</span>}
        <h3 className="flex items-center gap-3 flex-wrap">
          {link ? (
            <Link href={link} target="_blank" variant="heading">
              {title}
              <ExternalLink className="inline-block ml-2 h-3.5 w-3.5 align-middle" />
            </Link>
          ) : (
            title
          )}
          {badge && (
            <span className="text-xs px-2 py-1 bg-primary-light rounded font-medium">
              {badge}
            </span>
          )}
        </h3>
        <p>{description}</p>
        <Technologies technologies={technologies} />
      </div>
    </div>
  )
}

export default Card
