import intlPlugin from 'next-intl/plugin'

const withNextIntl = intlPlugin()

export default withNextIntl({
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://eu-assets.i.posthog.com/static/:path*'
      },
      {
        source: '/ingest/:path*',
        destination: 'https://eu.i.posthog.com/:path*'
      }
    ]
  }
})
