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

export const PRODUCTION_HOSTNAME = 'ikerromero.com'
export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || `https://www.${PRODUCTION_HOSTNAME}`

// Analytics

export const GTM_ID = 'GTM-5HPFGSZR'
