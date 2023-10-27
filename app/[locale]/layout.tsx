import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Exo_2 } from 'next/font/google'
import { notFound } from 'next/navigation'
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
  const { metadata } = await getDictionary(locale)

  const mainURL = 'https://www.ikerromero.com'

  return {
    ...metadata,
    metadataBase: new URL(mainURL),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        es: '/es'
      }
    },
    openGraph: {
      type: 'website',
      url: mainURL,
      locale,
      title: metadata.title,
      description: metadata.description,
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
