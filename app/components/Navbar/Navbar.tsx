import Link from 'next/link'
import { navbarLinks } from './data'
import s from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <Link href="/">Iker Romero</Link>
      <ul>
        {navbarLinks.map(({ text, link }) => (
          <li key={link}>
            <Link href={link}>{text}</Link>
          </li>
        ))}
      </ul>
      <Link href="#contact">Let&apos;s Talk</Link>
    </nav>
  )
}

export default Navbar
