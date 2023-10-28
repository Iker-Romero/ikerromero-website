import { ReactNode } from 'react'

import { getDictionary } from '../../../../get-dictionary'
import { i18n } from '../../../../i18n'

type MetadataProps = {
  params: { locale: string }
}

export const generateMetadata = async ({
  params: { locale }
}: MetadataProps) => {
  const {
    terms: { title, metadataDescription }
  } = await getDictionary(locale)

  return {
    title: title,
    description: metadataDescription,
    alternates: {
      canonical:
        locale === i18n.defaultLocale
          ? '/privacy-policy'
          : `/${locale}/privacy-policy`,
      languages: {
        en: '/en/privacy-policy',
        es: '/es/privacy-policy',
        [i18n.defaultLocale]: '/privacy-policy'
      }
    },
    openGraph: {
      title: title,
      description: metadataDescription
    }
  }
}

type LayoutProps = {
  children: ReactNode
}

export default function PrivacyPolicyLayout({ children }: LayoutProps) {
  return children
}
