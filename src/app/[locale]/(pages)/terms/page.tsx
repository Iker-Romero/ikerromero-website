import Email from '@/components/Email/Email'
import ObjectList from '@/components/ObjectList/ObjectList'
import { LONG_FULL_NAME, NATIONAL_ID } from 'consts'
import { getMessages } from 'i18n'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { Locale } from '../../../../../globals'

type Props = {
  params: { locale: Locale }
}

const Terms = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('terms')
  const {
    terms: { ownership: ownershipData, intellectualProperty }
  } = await getMessages(locale)

  const ownership = [
    {
      key: ownershipData.bulletPoints.owner.key,
      value: LONG_FULL_NAME
    },
    {
      key: ownershipData.bulletPoints.nationalID.key,
      value: NATIONAL_ID
    },
    {
      key: ownershipData.bulletPoints.address.key,
      value: ownershipData.bulletPoints.address.value
    },
    { key: 'Email', value: <Email /> }
  ]

  return (
    <div className="prose">
      <h1>{t('title')}</h1>

      <h2>{t('ownership.title')}</h2>
      <ObjectList objects={ownership} />

      <h2>{t('purposeOfTheWebsite.title')}</h2>
      <p>{t('purposeOfTheWebsite.description')}</p>

      <h2>{t('termsOfUser.title')}</h2>
      <p>{t('termsOfUser.description')}</p>

      <h2>{t('intellectualProperty.title')}</h2>
      {intellectualProperty.paragraphs.map((paragraph, i, paragraphs) => (
        <>
          <p>{paragraph}</p>
          {i < paragraphs.length - 1 && <br />}
        </>
      ))}

      <h2>{t('limitationOfLiability.title')}</h2>
      <p>{t('limitationOfLiability.description')}</p>

      <h2>{t('lawAndJurisdiction.title')}</h2>
      <p>{t('lawAndJurisdiction.description')}</p>
    </div>
  )
}

export default Terms
