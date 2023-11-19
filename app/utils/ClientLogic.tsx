'use client'

import axios from 'axios'
import { useEffect } from 'react'

import addScrollAnimationsListener from './scrollDrivenAnimations'

const loadAnalytics = async () => {
  const siteLoadDate = new Date()

  // const clickElementsIds = [
  //   'navbarLogo',
  //   'navbarCTA',
  //   'heroCTA',
  //   'emailLink',
  //   'contactFormSubmitButton',
  //   'footerLogo'
  // ]

  // const clickElements = clickElementsIds
  //   .map(id => document.getElementById(id))
  //   .filter(Boolean) as HTMLElement[]

  // // clickElements.forEach((element) => element?.addEventListener('click', () => ))

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {

  //   })
  // })

  // clickElements.forEach(element => observer.observe(element))

  // observer.observe(clickElements)

  const sectionsIds = [
    'heroContent',
    'benefitsSection',
    'experienceSection',
    'contactSection'
  ]

  // const threshold = []

  // const interval = 0.1

  // for (let i = 0; threshold.length !== 1 / interval + 1; i += interval) {
  //   threshold.push(Number(i.toFixed(2)))
  // }

  const sectionsData = await new Promise(resolve => {
    const array: Section[] = []

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(
        ({ isIntersecting, target: { id }, intersectionRatio }) => {
          if (isIntersecting) {
            const maxIntersectionRatio = Number(intersectionRatio.toFixed(2))

            array.push({ id, maxIntersectionRatio })
          }
        }
      )

      resolve(array)
    })

    const sections = sectionsIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    sections.forEach(section => sectionObserver.observe(section))
  })
  console.log('sectionsData', sectionsData)

  const userId = localStorage.getItem('userId')

  const sessionResponse = await axios.post('/api/sessions', {
    siteLoadDate,
    sectionsData,
    userId
  })

  if (!userId) {
    const newUserId = sessionResponse.data.userId

    if (newUserId) {
      localStorage.setItem('userId', newUserId)
    }
  }
}

const ClientLogic = () => {
  useEffect(() => {
    addScrollAnimationsListener()

    loadAnalytics()
  }, [])

  return null
}

export default ClientLogic
