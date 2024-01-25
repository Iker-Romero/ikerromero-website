import { unstable_setRequestLocale } from 'next-intl/server'
import { Locale } from 'types/globals'

import { redirect } from '../navigation'

type Props = { params: { locale: Locale } }

// This page only renders when the app is built statically (output: 'export')
export default function RootPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  redirect('/en')
}
