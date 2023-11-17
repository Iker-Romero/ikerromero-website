import Contact from '@/components/Contact/Contact'
import Experience from '@/components/Experience/Experience'
import Hero from '@/components/Hero/Hero'
import ClientLogic from 'utils/ClientLogic'

import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n'
import Benefits from './components/Benefits/Benefits'

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
      <ClientLogic />
    </>
  )
}

export default Home
