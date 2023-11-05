import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { FULL_NAME, MAIN_URL } from 'consts'
import { Exo_2 } from 'next/font/google'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { getDictionary } from '../../get-dictionary'
import { Locale, i18n } from '../../i18n'
import './globals.scss'

const exo = Exo_2({ subsets: ['latin'] })

type Props = {
  children: ReactNode
  params: { locale: string }
}

export const generateMetadata = async ({ params: { locale } }: Props) => {
  const {
    home: { metaDescription: description }
  } = await getDictionary(locale)

  const title = FULL_NAME

  return {
    title,
    description,
    metadataBase: new URL(MAIN_URL),
    alternates: {
      canonical: locale === i18n.defaultLocale ? '/' : `/${locale}`,
      languages: {
        en: '/en',
        es: '/es',
        [i18n.defaultLocale]: '/'
      }
    },
    openGraph: {
      type: 'website',
      url: MAIN_URL,
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

export async function generateStaticParams() {
  return i18n.locales.map((locale: Locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale }
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = i18n.locales.some(cur => cur === locale)
  if (!isValidLocale) notFound()

  const dict = await getDictionary(locale)

  return (
    <html lang={locale}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11396681838"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11396681838');
          `}
        </Script>
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab-dedicated-image.svg"
          color="#daa658"
        />
        <meta name="msapplication-TileColor" content="#0e2a3a" />
      </head>

      <body className={exo.className}>
        <header>
          <Navbar {...{ dict }} />
        </header>
        <main>{children}</main>
        <Footer {...{ dict }} />
        <ToastContainer />
      </body>
    </html>
  )
}
