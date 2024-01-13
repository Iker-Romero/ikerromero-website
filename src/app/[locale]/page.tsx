import Benefits from '@/components/Benefits/Benefits'
import Contact from '@/components/Contact/Contact'
import Experience from '@/components/Experience/Experience'
import Hero from '@/components/Hero/Hero'
import { getDictionary } from 'i18n/get-dictionary'
import { Locale } from 'i18n/i18n'

type Props = {
  params: { locale: Locale }
}

const Home = async ({ params }: Props) => {
  const dict = await getDictionary(params.locale)

  return (
    <>
      <Hero {...{ dict }} />
      <Benefits {...{ dict }} />
      <Experience {...{ dict }} />
      <Contact {...{ dict, params }} />
    </>
  )
}

export default Home
