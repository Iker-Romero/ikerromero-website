import intlPlugin from 'next-intl/plugin'

const withNextIntl = intlPlugin(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
)

export default withNextIntl({
  // Other Next.js configuration ...
})
