import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import s from './Experience.module.scss'

const Experience = () => {
  return (
    <section className={s['experience-section']}>
      <h2>Professional Experience</h2>
      <div className={s['cards-container']}>
        <div className={s['experience-card']}>
          <span className={s['date-range']}></span>
          <h3 className={s.title}>
            <Link href="https://triskellsoftware.com/" target="_blank">
              Front-end Web Developer | Triskell Software{' '}
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </Link>
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Experience
