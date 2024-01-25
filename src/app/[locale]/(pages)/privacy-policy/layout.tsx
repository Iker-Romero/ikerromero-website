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

  const { title, metaDescription } = await getTranslations({
    locale,
    namespace: 'privacy-policy'
  })

  return {
    title: title,
    description: metaDescription,
    alternates: {
      canonical:
        locale === defaultLocale
          ? '/privacy-policy'
          : `/${locale}/privacy-policy`,
      languages: {
        [defaultLocale]: '/privacy-policy',
        es: '/es/privacy-policy'
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
}

export default function PrivacyPolicyLayout({ children }: LayoutProps) {
  return children
}
