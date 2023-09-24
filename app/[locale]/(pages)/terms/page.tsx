import Email from '@/components/Email/Email'
import ObjectList from '@/components/ObjectList/ObjectList'
import ownerInfo from 'utils/ownerInfo'

import { getDictionary } from '../../../../get-dictionary'
import { Locale } from '../../../../i18n'

type Props = {
  params: { locale: Locale }
}

const Terms = async ({ params }: Props) => {
  const { terms: dict } = await getDictionary(params.locale)

  const { name, nationalID, address } = ownerInfo

  const ownership = [
    { key: dict.websiteOwnership.keys.owner, value: name },
    { key: dict.websiteOwnership.keys.nationalID, value: nationalID },
    { key: dict.websiteOwnership.keys.address, value: address },
    { key: 'Email', value: <Email /> }
  ]

  return (
    <>
      <h1>{dict.title}</h1>

      <h2>{dict.websiteOwnership.title}</h2>
      <ObjectList objects={ownership} />

      <h2>{dict.purposeOfTheWebsite.title}</h2>
      <p>{dict.purposeOfTheWebsite.description}</p>

      <h2>{dict.termsOfUser.title}</h2>
      <p>{dict.termsOfUser.description}</p>

      <h2>{dict.intellectualProperty.title}</h2>
      {dict.intellectualProperty.paragraphs.map((paragraph, i, paragraphs) => (
        <>
          <p>{paragraph}</p>
          {i < paragraphs.length - 1 && <br />}
        </>
      ))}

      <h2>{dict.limitationOfLiability.title}</h2>
      <p>{dict.limitationOfLiability.description}</p>

      <h2>{dict.lawAndJurisdiction.title}</h2>
      <p>{dict.lawAndJurisdiction.description}</p>
    </>
  )
}

export default Terms
