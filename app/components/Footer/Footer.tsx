import Link from '../Link/Link'
import s from './Footer.module.scss'
import LinksContainer from './components/LinksContainer/LinksContainer'
import { aboutMeLinks, legalLinks } from './data'

const Footer = () => {
  return (
    <footer>
      <div className={s['footer-content']}>
        <div className={s.links}>
          <Link href="/" variant="logoSmall">
            {'< Iker />'}
          </Link>
          <LinksContainer title="About Me" links={aboutMeLinks} />
          <LinksContainer title="Legal" links={legalLinks} />
        </div>
        <p className={s.copyright}>
          © 2023-present Iker Romero. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
