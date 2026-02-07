import Link from '@/components/Link/Link'
import { useTranslations } from 'next-intl'

const Navbar = () => {
  const t = useTranslations('contact')

  return (
    <nav className="w-full flex gap-8 justify-between items-center min-h-16 p-2 bg-primary-light supports-[backdrop-filter:blur(5px)]:bg-primary-light/25 supports-[backdrop-filter:blur(5px)]:backdrop-blur-[5px] supports-[backdrop-filter:blur(5px)]:[backface-visibility:hidden] supports-[backdrop-filter:blur(5px)]:border-b supports-[backdrop-filter:blur(5px)]:border-white/5">
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
