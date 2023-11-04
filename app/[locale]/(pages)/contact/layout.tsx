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
    contact: { metaTitle, metaDescription }
  } = await getDictionary(locale)

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical:
        locale === i18n.defaultLocale ? '/contact' : `/${locale}/contact`,
      languages: {
        en: '/contact',
        es: '/es/contact',
        [i18n.defaultLocale]: '/contact'
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
