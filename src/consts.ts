// Routing

export const locales = ['en', 'es']
export const defaultLocale = 'es'
export const localePrefix = undefined // Use the default: `always`

// Personal data

export const NAME = 'Iker'
export const SURNAME = 'Romero'
export const FULL_NAME = `${NAME} ${SURNAME}`
export const LONG_FULL_NAME = `${FULL_NAME} Caramés`
export const NATIONAL_ID = process.env.NEXT_PUBLIC_NATIONAL_ID || ''
export const EMAIL = 'ikerromeroweb@gmail.com'

// Metadata

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://www.ikerromero.com'

// Analitycs

export const GTM_ID = 'GTM-5HPFGSZR'

export const OWN_ANALYTICS_INTERVAL_MS = 5000

export const SECTIONS_IDS = [
  'heroContent',
  'benefitsSection',
  'experienceSection',
  'contactSection'
]

export const CLICK_ELEMENTS_IDS = [
  'navbarLogo',
  'navbarCTA',
  'heroCTA',
  'emailLink',
  'contactFormSubmitButton',
  'footerLogo'
]

export const DEFAULT_PAGE_DATA = { sections: {}, clicks: [], _id: '' }
