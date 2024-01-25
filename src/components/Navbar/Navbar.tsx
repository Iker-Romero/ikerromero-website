import Link from '@/components/Link/Link'
import { useTranslations } from 'next-intl'

import s from './Navbar.module.scss'

const Navbar = () => {
  const t = useTranslations('contact')
  console.log('t("CTA")', t('CTA'))

  return (
    <nav className={s.navbar}>
      <Link id="navbarLogo" href="/" variant="logo">
        {'< Iker />'}
      </Link>
      <div className={s['sections-links-container']}>
        <Link id="navbarCTA" href="/contact" variant="callToActionSecondary">
          {t('CTA')}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
