import Link from '../Link/Link'
import s from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <Link href="/" variant="logo">
        {'< Iker />'}
      </Link>
      <div className={s['sections-links-container']}>
        <Link href="/contact" variant="callToActionSecondary">
          Let&apos;s Talk
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
