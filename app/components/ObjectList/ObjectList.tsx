import Link from '../Link/Link'
import s from './ObjectList.module.scss'

type BaseObject = {
  key: string
  value: string
}

type WithType = BaseObject & { type: 'email' }

type IdentificationObject = BaseObject | WithType

type Props = {
  objects: IdentificationObject[]
}

const ObjectList = ({ objects }: Props) => {
  return (
    <ul className={s['object-list']}>
      {objects.map(obj => (
        <li key={obj.key}>
          <span>{obj.key}: </span>
          {'type' in obj && obj.type === 'email' ? (
            <Link href={`mailto:${obj.value}`} variant="underlined">
              {obj.value}
            </Link>
          ) : (
            obj.value
          )}
        </li>
      ))}
    </ul>
  )
}

export default ObjectList
