import Contact from '@/components/Contact/Contact'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Locale } from 'types/globals'

type Props = {
  params: { locale: Locale }
}

const page = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale)

  return <Contact variant="page" />
}

export default page
