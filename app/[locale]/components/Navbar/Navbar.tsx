import { Dictionary } from '../../../../get-dictionary'
import Link from '../Link/Link'
import s from './Navbar.module.scss'

type Props = {
  dict: Dictionary
}

const Navbar = ({ dict }: Props) => {
  const { contact } = dict

  return (
    <nav className={s.navbar}>
      <Link id="navbarLogo" href="/" variant="logo">
        {'< Iker />'}
      </Link>
      <div className={s['sections-links-container']}>
        <Link id="navbarCTA" href="/contact" variant="callToActionSecondary">
          {contact.CTA}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
