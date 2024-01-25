import { locales } from './consts'

type SectionIdUnion =
  | 'heroContent'
  | 'benefitsSection'
  | 'experienceSection'
  | 'contactSection'

type Section = {
  id: SectionIdUnion
  maxIntersectionRatio: number
}

type SectionData = Section & {
  page: string
}

type Sections = Partial<Record<SectionsIdsUnion, Section>>

type ClickIdUnion =
  | 'navbarLogo'
  | 'navbarCTA'
  | 'heroCTA'
  | 'emailLink'
  | 'contactFormSubmitButton'
  | 'footerLogo'

type Click = {
  id: ClickIdUnion
  timeUntilEvent: number
}

type Page = {
  sections: Sections
  clicks: Click[]
  _id?: string
}

type Locale = (typeof locales)[number]
