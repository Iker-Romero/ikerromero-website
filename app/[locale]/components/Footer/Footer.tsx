import { Dictionary } from '../../../../get-dictionary'
import Link from '../Link/Link'
import s from './Footer.module.scss'
import LinksContainer from './components/LinksContainer/LinksContainer'
import { aboutMeLinks, legalPaths } from './data'

type Props = {
  dict: Dictionary
}

const Footer = ({ dict }: Props) => {
  const { aboutMe, legal, copyright } = dict.footer

  const legalLinks = legalPaths.map(({ id, link }) => {
    const { name } = legal.links.find(dictLink => dictLink.id === id) ?? {}

    return { name, link }
  })

  return (
    <footer>
      <div className={s['footer-content']}>
        <div className={s.links}>
          <Link id="footerLogo" href="/" variant="logoSmall">
            {'< Iker />'}
          </Link>
          <LinksContainer title={aboutMe.title} links={aboutMeLinks} />
          <LinksContainer title={legal.title} links={legalLinks} />
        </div>
        <p className={s.copyright}>{copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
