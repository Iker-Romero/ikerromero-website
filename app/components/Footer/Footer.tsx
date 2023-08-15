import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from '../Link/Link'
import s from './Footer.module.scss'
import { socialMedia } from './data'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <h3>ikersoftdev@gmail.com</h3>
      <ul>
        {socialMedia.map(({ name, icon, link }) => (
          <li key={name}>
            <Link href={link}>
              {name} <FontAwesomeIcon {...{ icon }} />
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
