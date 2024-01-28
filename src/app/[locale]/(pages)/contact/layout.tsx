import { defaultLocale } from 'consts'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { ReactNode } from 'react'

import { Locale } from '../../../../../globals'

type MetadataProps = {
  params: { locale: Locale }
}

export const generateMetadata = async ({
  params: { locale }
}: MetadataProps) => {
  unstable_setRequestLocale(locale)

  const t = await getTranslations({
    locale,
    namespace: 'contact'
  })

  const title = t('metaTitle')
  const description = t('metaDescription')

  return {
    title,
    description,
    alternates: {
      canonical: locale === defaultLocale ? '/contact' : `/${locale}/contact`,
      languages: {
        [defaultLocale]: '/contact',
        es: '/es/contact'
      }
    },
    openGraph: {
      title,
      description
    }
  }
}

type LayoutProps = {
  children: ReactNode
  params: { locale: Locale }
}

export default function ContactLayout({
  children,
  params: { locale }
}: LayoutProps) {
  unstable_setRequestLocale(locale)

  return children
}
