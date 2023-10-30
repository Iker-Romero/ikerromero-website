import Email from '@/components/Email/Email'
import ObjectList from '@/components/ObjectList/ObjectList'
import { ADDRESS, FULL_NAME } from 'consts'

import { getDictionary } from '../../../../get-dictionary'
import { Locale } from '../../../../i18n'

type Props = {
  params: { locale: Locale }
}

const PrivacyPolicy = async ({ params }: Props) => {
  const { privacyPolicy: dict } = await getDictionary(params.locale)

  const identification = [
    { key: dict.identification.keys.name, value: FULL_NAME },
    { key: dict.identification.keys.address, value: ADDRESS },
    { key: 'Email', value: <Email /> }
  ]

  return (
    <>
      <h1>{dict.title}</h1>

      <h2>{dict.identification.title}</h2>
      <ObjectList objects={identification} />

      <h2>{dict.dataCollection.title}</h2>
      <p>{dict.dataCollection.description}</p>
      <ul>
        {dict.dataCollection.list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{dict.useOfData.title}</h2>
      <p>{dict.useOfData.description}</p>
      <ul>
        {dict.useOfData.list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{dict.dataStorage.title}</h2>
      <p>{dict.dataStorage.description}</p>

      <h2>{dict.security.title}</h2>
      <p>{dict.security.description}</p>

      <h2>{dict.userRights.title}</h2>
      <p>
        {dict.userRights.description.part1}
        <Email />
        {dict.userRights.description.part2}
      </p>

      <h2>{dict.durationOfDataRetention.title}</h2>
      <p>{dict.durationOfDataRetention.description}</p>

      <h2>{dict.changesToThePrivacyPolicy.title}</h2>
      <p>{dict.changesToThePrivacyPolicy.description}</p>
    </>
  )
}

export default PrivacyPolicy
