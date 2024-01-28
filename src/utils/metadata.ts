import { locales } from 'consts'

import { Locale } from '../../globals'

export const getAlternates = ({
  pathname,
  locale
}: {
  pathname: string
  locale: Locale
}) => {
  const localizedPathname = `/${locale}` + pathname

  return {
    canonical: localizedPathname,
    languages: Object.fromEntries(
      locales.map(locale => [locale, localizedPathname])
    )
  }
}
