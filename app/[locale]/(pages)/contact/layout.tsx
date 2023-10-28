import { ReactNode } from 'react'

import { getDictionary } from '../../../../get-dictionary'

type MetadataProps = {
  params: { locale: string }
}

export const generateMetadata = async ({
  params: { locale }
}: MetadataProps) => {
  const {
    contact: { metadataTitle, metadataDescription }
  } = await getDictionary(locale)

  return {
    title: metadataTitle,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        en: '/en/contact',
        es: '/es/contact'
      }
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription
    }
  }
}

type LayoutProps = {
  children: ReactNode
}

export default function ContactLayout({ children }: LayoutProps) {
  return children
}
