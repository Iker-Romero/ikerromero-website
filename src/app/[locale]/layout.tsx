import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { GoogleTagManager } from '@next/third-parties/google'
import { BASE_URL, FULL_NAME, GTM_ID, defaultLocale, locales } from 'consts'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { Exo_2 } from 'next/font/google'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Locale } from 'types/globals'
import ClientLogic from 'utils/ClientLogic'

import './globals.scss'

const exo = Exo_2({ subsets: ['latin'] })

type Props = {
  children: ReactNode
  params: { locale: Locale }
}

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export const generateMetadata = async ({ params: { locale } }: Props) => {
  const t = await getTranslations({ locale, namespace: 'home' })

  const title = FULL_NAME
  const description = t('metaDescription')

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: locale === defaultLocale ? '/' : `/${locale}`,
      languages: {
        [defaultLocale]: '/',
        es: '/es'
      }
    },
    openGraph: {
      type: 'website',
      url: BASE_URL,
      locale,
      title,
      description,
      images: [
        { url: '/images/iker-romero-1200x630.png' },
        { url: '/images/iker-romero-300x300.png' }
      ]
    }
  }
}

export default async function RootLayout({
  children,
  params: { locale }
}: Props) {
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale}>
      <head>
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab-dedicated-image.svg"
          color="#daa658"
        />
        <meta name="msapplication-TileColor" content="#0e2a3a" />
      </head>

      <body className={exo.className}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />

        <ClientLogic />
        <ToastContainer />
      </body>

      <GoogleTagManager gtmId={GTM_ID} />
    </html>
  )
}
