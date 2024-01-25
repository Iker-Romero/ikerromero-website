import { defaultLocale } from 'consts'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { ReactNode } from 'react'
import { Locale } from 'types/globals'

type MetadataProps = {
  params: { locale: Locale }
}

export const generateMetadata = async ({
  params: { locale }
}: MetadataProps) => {
  const { title, metaDescription } = await getTranslations({
    locale,
    namespace: 'terms'
  })

  return {
    title: title,
    description: metaDescription,
    alternates: {
      canonical: locale === defaultLocale ? '/terms' : `/${locale}/terms`,
      languages: {
        [defaultLocale]: '/terms',
        es: '/es/terms'
      }
    },
    openGraph: {
      title: title,
      description: metaDescription
    }
  }
}

type LayoutProps = {
  children: ReactNode
  params: { locale: Locale }
}

export default function TermsLayout({
  children,
  params: { locale }
}: LayoutProps) {
  unstable_setRequestLocale(locale)

  return children
}
