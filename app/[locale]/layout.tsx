import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Exo } from 'next/font/google'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { getDictionary } from '../../get-dictionary'
import { Locale, i18n } from '../../i18n'
import './globals.scss'

const exo = Exo({ subsets: ['latin'] })

type Props = {
  children: ReactNode
  params: { locale: string }
}

export const generateMetadata = async ({ params: { locale } }: Props) => {
  const { metadata } = await getDictionary(locale)

  return metadata
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
