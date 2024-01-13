import intlPlugin from 'next-intl/plugin'

const withNextIntl = intlPlugin(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n/i18n.ts'
)

export default withNextIntl({
  // Other Next.js configuration ...
  reactStrictMode: false
})
