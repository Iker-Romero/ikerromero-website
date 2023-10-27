import { ReactNode } from 'react'

type MetadataProps = {
  params: { locale: string }
}

export const generateMetadata = ({ params: { locale } }: MetadataProps) => {
  return {
    alternates: {
      canonical: `/${locale}/terms`,
      languages: {
        en: '/en/terms',
        es: '/es/terms'
      }
    }
  }
}

type LayoutProps = {
  children: ReactNode
}

export default function TermsLayout({ children }: LayoutProps) {
  return children
}
