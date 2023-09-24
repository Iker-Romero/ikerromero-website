import { Dictionary } from '../../../../get-dictionary'
import Link from '../Link/Link'
import s from './Footer.module.scss'
import LinksContainer from './components/LinksContainer/LinksContainer'
import { aboutMeLinks, legalLinks as legalLinksData } from './data'

type Props = {
  dict: Dictionary
}

const Footer = ({ dict }: Props) => {
  const { copyright } = dict.footer

  const legalLinks = legalLinksData.map(({ id, link }) => {
    const { name } =
      dict.footer.legalLinks.find(dictLink => dictLink.id === id) ?? {}

    return { name, link }
  })

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
        <p className={s.copyright}>{copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
