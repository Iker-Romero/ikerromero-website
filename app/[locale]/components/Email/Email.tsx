import Link from '@/components/Link/Link'
import { EMAIL } from 'consts'

const Email = () => {
  return (
    <Link href={`mailto:${EMAIL}`} target="_blank" variant="underlined">
      {EMAIL}
    </Link>
  )
}

export default Email
