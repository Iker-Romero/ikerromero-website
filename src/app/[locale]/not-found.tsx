import H1 from '@/components/H1/H1'
import Link from '@/components/Link/Link'
import { useTranslations } from 'next-intl'

const NotFound404 = () => {
  const t = useTranslations('404NotFound')

  return (
    <div>
      <H1>{t('title')}</H1>
      <p>{t('description')}</p>
      <br />
      <p>
        {t('redirect.indication')}
        <Link href="/#" variant="underlined">
          {t('redirect.destination')}
        </Link>
        .
      </p>
    </div>
  )
}

export default NotFound404
