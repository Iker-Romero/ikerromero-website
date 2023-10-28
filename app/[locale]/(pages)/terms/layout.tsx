import { ReactNode } from 'react'

import { getDictionary } from '../../../../get-dictionary'

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
    alternates: {
      canonical: `/${locale}/terms`,
      languages: {
        en: '/en/terms',
        es: '/es/terms'
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
