import Link from '@/components/Link/Link'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import s from './WrapperLink.module.scss'

type Props = {
  children: React.ReactNode
  link?: string
}

const WrapperLink = ({ children, link }: Props) => {
  return (
    link && (
      <Link href={link} target="_blank" variant="header" className={s.link}>
        {children}
        <FontAwesomeIcon
          icon={faUpRightFromSquare}
          className={s['external-link-icon']}
          color="#000"
        />
      </Link>
    )
  )
}

export default WrapperLink
