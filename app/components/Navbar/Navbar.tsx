import Link from '../Link/Link'
import s from './Navbar.module.scss'
import { navbarLinks } from './data'

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <Link href="/">{'< Iker />'}</Link>
      <div className={s['sections-links']}>
        <ul className={s['home-page']}>
          {navbarLinks.map(({ text, link }) => (
            <li key={link}>
              <Link href={link}>{text}</Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" variant="callToActionSecondary">
          Let&apos;s Talk
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
