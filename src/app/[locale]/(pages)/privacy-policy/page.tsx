import Email from '@/components/Email/Email'
import ObjectList from '@/components/ObjectList/ObjectList'
import { LONG_FULL_NAME } from 'consts'
import { getMessages } from 'i18n'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { Locale } from 'types/globals'

type Props = {
  params: { locale: Locale }
}

const PrivacyPolicy = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale)

  const { dataCollection, useOfData } = await getMessages(locale)
  const t = await getTranslations('privacy-policy')

  const identification = [
    { key: t('identification.bulletPoints.name.key'), value: LONG_FULL_NAME },
    {
      key: t('identification.bulletPoints.address.key'),
      value: t('identification.bulletPoints.address.value')
    },
    { key: 'Email', value: <Email /> }
  ]

  return (
    <>
      <h1>{t('title')}</h1>

      <h2>{t('identification.title')}</h2>
      <ObjectList objects={identification} />

      <h2>{t('dataCollection.title')}</h2>
      <p>{t('dataCollection.description')}</p>
      <ul>
        {dataCollection.list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{t('useOfData.title')}</h2>
      <p>{t('useOfData.description')}</p>
      <ul>
        {useOfData.list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{t('dataStorage.title')}</h2>
      <p>{t('dataStorage.description')}</p>

      <h2>{t('security.title')}</h2>
      <p>{t('security.description')}</p>

      <h2>{t('userRights.title')}</h2>
      <p>
        {t('userRights.description.part1')}
        <Email />
        {t('userRights.description.part2')}
      </p>

      <h2>{t('durationOfDataRetention.title')}</h2>
      <p>{t('durationOfDataRetention.description')}</p>

      <h2>{t('changesToThePrivacyPolicy.title')}</h2>
      <p>{t('changesToThePrivacyPolicy.description')}</p>
    </>
  )
}

export default PrivacyPolicy
