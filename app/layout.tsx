import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iker Romero',
  description: 'Iker Romero: Expert Landing Page Designer & Developer.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
