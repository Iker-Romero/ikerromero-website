import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Locale } from 'types/globals'

import { locales } from './consts'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  }
})

export const getMessages = async (locale: Locale) =>
  (await import(`../messages/${locale}.json`)).default
