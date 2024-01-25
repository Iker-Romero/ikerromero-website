import Link from '@/components/Link/Link'
import { getMessages } from 'i18n'
import { getLocale, getTranslations } from 'next-intl/server'

import s from './Footer.module.scss'
import LinksContainer from './components/LinksContainer/LinksContainer'
import { aboutMeLinks, legalPaths } from './data'

const Footer = async () => {
  const t = await getTranslations('footer')
  const locale = await getLocale()
  const messages = await getMessages(locale)

  const legalLinks = legalPaths.map(({ id, link }) => {
    const { name } =
      messages.footer.legal.links.find(dictLink => dictLink.id === id) ?? {}

    return { name, link }
  })

  return (
    <footer>
      <div className={s['footer-content']}>
        <div className={s.links}>
          <Link id="footerLogo" href="/" variant="logoSmall">
            {'< Iker />'}
          </Link>
          <LinksContainer title={t('aboutMe.title')} links={aboutMeLinks} />
          <LinksContainer title={t('legal.title')} links={legalLinks} />
        </div>
        <p className={s.copyright}>{t('copyright')}</p>
      </div>
    </footer>
  )
}

export default Footer
