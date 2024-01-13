import { getDictionary } from 'i18n/get-dictionary'
import { i18n } from 'i18n/i18n'
import { ReactNode } from 'react'

type MetadataProps = {
  params: { locale: string }
}

export const generateMetadata = async ({
  params: { locale }
}: MetadataProps) => {
  const {
    privacyPolicy: { title, metaDescription }
  } = await getDictionary(locale)

  return {
    title: title,
    description: metaDescription,
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
