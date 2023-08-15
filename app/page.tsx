import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import s from './page.module.scss'

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Contact />
    </>
  )
}
