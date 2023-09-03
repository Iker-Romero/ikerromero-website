import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import doetenv from 'dotenv'
import type { Metadata } from 'next'
import { Exo } from 'next/font/google'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './globals.scss'

doetenv.config()

config.autoAddCss = false

const exo = Exo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iker Romero',
  description: 'Iker Romero: Expert Landing Page Designer & Developer.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
