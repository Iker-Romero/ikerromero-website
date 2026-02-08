import Link from '@/components/Link/Link'
import { useTranslations } from 'next-intl'

const Navbar = () => {
  const t = useTranslations('contact')

  return (
    <nav className="w-full max-w-[900px] mx-auto flex gap-8 justify-between items-center min-h-16 p-2">
      <Link id="navbarLogo" href="/" variant="logo">
        {'< Iker />'}
      </Link>
      <div>
        <Link id="navbarCTA" href="/contact" variant="callToActionSecondary">
          {t('CTA')}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
