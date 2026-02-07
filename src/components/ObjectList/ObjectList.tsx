import { ReactNode } from 'react'

type Identification = {
  key: string
  value: ReactNode
}

type Props = {
  objects: Identification[]
}

const ObjectList = ({ objects }: Props) => {
  return (
    <ul className="[&_li_span]:font-bold">
      {objects.map(obj => (
        <li key={obj.key}>
          <span>{obj.key}: </span>
          {obj.value}
        </li>
      ))}
    </ul>
  )
}

export default ObjectList
