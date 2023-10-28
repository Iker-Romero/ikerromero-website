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
      canonical: locale === i18n.defaultLocale ? '/terms' : `/${locale}/terms`,
      languages: {
        en: '/en/terms',
        es: '/es/terms',
        [i18n.defaultLocale]: '/terms'
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

export default function TermsLayout({ children }: LayoutProps) {
  return children
}
