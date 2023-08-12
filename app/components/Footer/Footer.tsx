import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { socialMedia } from './data'
import s from './Footer.module.scss'

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
