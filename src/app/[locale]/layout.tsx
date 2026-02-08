import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { GoogleTagManager } from '@next/third-parties/google'
import { BASE_URL, FULL_NAME, GTM_ID, locales } from 'consts'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { Exo_2 } from 'next/font/google'
import { ReactNode } from 'react'
import ClientLogic from 'utils/ClientLogic'
import { getAlternates } from 'utils/metadata'

import { PHProvider } from 'utils/PostHogProvider'

import { Locale } from '../../../globals'
import './globals.css'

const exo = Exo_2({ subsets: ['latin'] })

type Props = {
  children: ReactNode
  params: { locale: Locale }
}

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export const generateMetadata = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'home' })

  const title = FULL_NAME
  const description = t('metaDescription')

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: getAlternates({ locale, pathname: '/' }),
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

      <PHProvider>
        <body className={exo.className}>
          <header className="bg-primary-light supports-[backdrop-filter:blur(5px)]:bg-primary-light/25 supports-[backdrop-filter:blur(5px)]:backdrop-blur-[5px] supports-[backdrop-filter:blur(5px)]:[backface-visibility:hidden] supports-[backdrop-filter:blur(5px)]:border-b supports-[backdrop-filter:blur(5px)]:border-white/5">
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />

          <ClientLogic />
        </body>
      </PHProvider>

      {process.env.NEXT_PUBLIC_ENABLE_GTM === 'true' && (
        <GoogleTagManager gtmId={GTM_ID} />
      )}
    </html>
  )
}
