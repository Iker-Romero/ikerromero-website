import { BASE_URL, defaultLocale, locales } from 'consts'

import { Locale } from '../../globals'

export const getAlternates = ({
  pathname,
  locale
}: {
  pathname: string
  locale: Locale
}) => {
  return {
    canonical: `${BASE_URL}/${locale}${pathname}`,
    languages: {
      ...Object.fromEntries(
        locales.map(l => [l, `${BASE_URL}/${l}${pathname}`])
      ),
      'x-default': `${BASE_URL}/${defaultLocale}${pathname}`
    }
  }
}
