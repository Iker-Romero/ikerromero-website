import { ReactNode } from 'react'

type MetadataProps = {
  params: { locale: string }
}

export const generateMetadata = ({ params: { locale } }: MetadataProps) => {
  return {
    alternates: {
      canonical: `/${locale}/privacy-policy`,
      languages: {
        en: '/en/privacy-policy',
        es: '/es/privacy-policy'
      }
    }
  }
}

type LayoutProps = {
  children: ReactNode
}

export default function PrivacyPolicyLayout({ children }: LayoutProps) {
  return children
}
