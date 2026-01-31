import intlPlugin from 'next-intl/plugin'

const withNextIntl = intlPlugin()

export default withNextIntl({
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/i/static/:path*',
        destination: 'https://eu-assets.i.posthog.com/static/:path*'
      },
      {
        source: '/i/:path*',
        destination: 'https://eu.i.posthog.com/:path*'
      }
    ]
  }
})
