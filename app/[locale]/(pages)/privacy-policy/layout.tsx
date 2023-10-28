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
      canonical: `/${locale}/privacy-policy`,
      languages: {
        en: '/en/privacy-policy',
        es: '/es/privacy-policy'
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
