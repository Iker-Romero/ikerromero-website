import { notFound } from 'next/navigation'
import 'server-only'

// Home
type Home = {
  metaDescription: string
}

// Hero
type Hero = {
  description: string
}

// Contact
type Placeholders = {
  name: string
  email: string
  message: string
}

type SuccessToast = {
  title: string
  description: string
}

type ErrorToast = {
  title: string
  description: { part1: string; part2: string }
}

type Contact = {
  CTA: string
  title: string
  metaTitle: string
  description: string
  metaDescription: string
  placeholders: Placeholders
  privacyPolicy: {
    label: string
    anchor: string
  }
  submit: string
  toast: {
    success: SuccessToast
    error: ErrorToast
  }
}

// Experience

type Job = {
  id: number
  datesRange: string
  role: string
  company: string
  description: string
}

type Experience = {
  title: string
  jobs: Job[]
}

// Footer
type Footer = {
  aboutMe: { title: string }
  legal: {
    title: string
    links: {
      id: number
      name: string
    }[]
  }
  copyright: string
}

// Terms
type IntellectualPropertyDetails = {
  title: string
  paragraphs: string[]
}

type Terms = {
  title: string
  metaDescription: string
  websiteOwnership: SectionDetails & { keys: { [key: string]: string } }
  purposeOfTheWebsite: SectionDetails
  termsOfUser: SectionDetails
  intellectualProperty: IntellectualPropertyDetails
  limitationOfLiability: SectionDetails
  lawAndJurisdiction: SectionDetails
}

// PrivacyPolicy
type UserRightsDetails = {
  title: string
  description: { part1: string; part2: string }
}

type PrivacyPolicy = {
  title: string
  metaDescription: string
  identification: SectionDetails & { keys: { [key: string]: string } }
  dataCollection: SectionDetails & { list: string[] }
  useOfData: SectionDetails & { list: string[] }
  dataStorage: SectionDetails
  security: SectionDetails
  userRights: UserRightsDetails
  durationOfDataRetention: SectionDetails
  changesToThePrivacyPolicy: SectionDetails
}

// Shared section details for various parts of the object
type SectionDetails = {
  title: string
  description?: string
}

// Props (to represent the full object structure)
export type Dictionary = {
  home: Home
  hero: Hero
  contact: Contact
  experience: Experience
  footer: Footer
  terms: Terms
  privacyPolicy: PrivacyPolicy
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  try {
    return import(`./dictionaries/${locale}.json`).then(
      module => module.default
    )
  } catch (error) {
    notFound()
  }
}
