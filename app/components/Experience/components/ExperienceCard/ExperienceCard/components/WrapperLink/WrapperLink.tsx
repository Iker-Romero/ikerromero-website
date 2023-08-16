import Link from '@/components/Link/Link'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  children: React.ReactNode
  link?: string
}

const WrapperLink = ({ children, link }: Props) => {
  return (
    link && (
      <Link href={link} target="_blank">
        {children}
        <FontAwesomeIcon icon={faUpRightFromSquare} />
      </Link>
    )
  )
}

export default WrapperLink
