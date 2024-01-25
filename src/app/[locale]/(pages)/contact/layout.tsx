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
  unstable_setRequestLocale(locale)

  const { metaTitle, metaDescription } = await getTranslations({
    locale,
    namespace: 'contact'
  })

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: locale === defaultLocale ? '/contact' : `/${locale}/contact`,
      languages: {
        [defaultLocale]: '/contact',
        es: '/es/contact'
      }
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription
    }
  }
}

type LayoutProps = {
  children: ReactNode
}

export default function ContactLayout({ children }: LayoutProps) {
  return children
}
