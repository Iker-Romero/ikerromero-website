import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { ReactNode } from 'react'
import { getAlternates } from 'utils/metadata'

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
    namespace: 'privacyPolicy'
  })

  const title = t('title')
  const description = t('metaDescription')

  return {
    title,
    description,
    alternates: getAlternates({ locale, pathname: '/contact' }),
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

export default function PrivacyPolicyLayout({
  children,
  params: { locale }
}: LayoutProps) {
  unstable_setRequestLocale(locale)

  return children
}
