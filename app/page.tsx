import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import s from './page.module.css'

export default function Home() {
  return (
    <main className={s.main}>
      <Hero />
      <Experience />
      <Contact />
    </main>
  )
}
