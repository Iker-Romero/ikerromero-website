import { TechnologiesType } from '@/lib/types'

type Props = {
  technologies: TechnologiesType
}

const TechTags = ({ technologies }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((techName, i) => (
        <span
          key={techName}
          className={`p-2 bg-primary-light animate-hidden fadeInLeft-100 i-${i} delay-333`}
        >
          {techName}
        </span>
      ))}
    </div>
  )
}

export default TechTags
