import { ReactNode } from 'react'

type MetadataProps = {
  params: { locale: string }
}

export const generateMetadata = ({ params: { locale } }: MetadataProps) => {
  return {
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        en: '/en/contact',
        es: '/es/contact'
      }
    }
  }
}

type LayoutProps = {
  children: ReactNode
}

export default function ContactLayout({ children }: LayoutProps) {
  return children
}
