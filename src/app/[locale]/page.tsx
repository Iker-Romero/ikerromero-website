import Benefits from '@/components/Benefits/Benefits'
import Contact from '@/components/Contact/Contact'
import Experience from '@/components/Experience/Experience'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import { unstable_setRequestLocale } from 'next-intl/server'

import { Locale } from '../../../globals'

type Props = {
  params: { locale: Locale }
}

const Home = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Hero />
      <Benefits />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
