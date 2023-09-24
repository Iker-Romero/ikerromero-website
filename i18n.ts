import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./dictionaries/${locale}.json`)).default
}))

export const i18n = {
  // A list of all locales that are supported
  locales: ['en', 'es'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en'
}

export type Locale = (typeof i18n)['locales'][number]
