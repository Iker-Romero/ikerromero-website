import Contact from '@/components/Contact/Contact'
import { getDictionary } from 'i18n/get-dictionary'
import { Locale } from 'i18n/i18n'

type Props = {
  params: { locale: Locale }
}

const page = async ({ params }: Props) => {
  const dict = await getDictionary(params.locale)

  return <Contact variant="page" {...{ dict, params }} />
}

export default page
