import { ReactNode } from 'react'

import s from './ObjectList.module.scss'

type Identification = {
  key: string
  value: ReactNode
}

type Props = {
  objects: Identification[]
}

const ObjectList = ({ objects }: Props) => {
  return (
    <ul className={s['object-list']}>
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
