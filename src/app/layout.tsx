import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import doetenv from 'dotenv'
import { unstable_setRequestLocale } from 'next-intl/server'
import { ReactNode } from 'react'
import { Locale } from 'types/globals'

config.autoAddCss = false

doetenv.config()

type Props = {
  children: ReactNode
  params: { locale: Locale }
}

const RootLayout = ({ children, params: { locale } }: Props) => {
  unstable_setRequestLocale(locale)

  return children
}

export default RootLayout
