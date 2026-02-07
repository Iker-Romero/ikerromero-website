import { TechnologiesType } from '@/components/Experience/data'

type Props = {
  technologies: TechnologiesType
}

const Technologies = ({ technologies }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((techName, i) => (
        <span
          key={techName}
          className={`p-2 bg-primary-light animate-hidden fadeInLeft-100 i-${i} delay-1000`}
        >
          {techName}
        </span>
      ))}
    </div>
  )
}

export default Technologies
