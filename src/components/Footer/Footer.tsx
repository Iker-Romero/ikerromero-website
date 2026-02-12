import Link from '@/components/Link/Link'
import { getMessages } from 'i18n'
import { getLocale, getTranslations } from 'next-intl/server'

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
    <footer className="bg-primary-dark py-8 px-4">
      <div className="flex flex-col gap-8 p-4 max-w-225 mx-auto items-center w-fit">
        <div className="flex gap-8 w-full justify-between flex-wrap">
          <Link id="footerLogo" href="/" variant="logoSmall">
            {'< Iker />'}
          </Link>
          <LinksContainer title={t('aboutMe.title')} links={aboutMeLinks} />
          <LinksContainer title={t('legal.title')} links={legalLinks} />
        </div>
        <p className="text-sm text-text-dark text-center">{t('copyright')}</p>
      </div>
    </footer>
  )
}

export default Footer
