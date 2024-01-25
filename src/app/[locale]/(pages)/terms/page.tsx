import Email from '@/components/Email/Email'
import ObjectList from '@/components/ObjectList/ObjectList'
import { LONG_FULL_NAME, NATIONAL_ID } from 'consts'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { Locale } from 'types/globals'

type Props = {
  params: { locale: Locale }
}

const Terms = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale)

  const {
    title,
    ownership: ownershipData,
    purposeOfTheWebsite,
    termsOfUser,
    intellectualProperty,
    limitationOfLiability,
    lawAndJurisdiction
  } = await getTranslations('terms')

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
    <>
      <h1>{title}</h1>

      <h2>{ownershipData.title}</h2>
      <ObjectList objects={ownership} />

      <h2>{purposeOfTheWebsite.title}</h2>
      <p>{purposeOfTheWebsite.description}</p>

      <h2>{termsOfUser.title}</h2>
      <p>{termsOfUser.description}</p>

      <h2>{intellectualProperty.title}</h2>
      {intellectualProperty.paragraphs.map((paragraph, i, paragraphs) => (
        <>
          <p>{paragraph}</p>
          {i < paragraphs.length - 1 && <br />}
        </>
      ))}

      <h2>{limitationOfLiability.title}</h2>
      <p>{limitationOfLiability.description}</p>

      <h2>{lawAndJurisdiction.title}</h2>
      <p>{lawAndJurisdiction.description}</p>
    </>
  )
}

export default Terms
