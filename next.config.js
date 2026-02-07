import intlPlugin from 'next-intl/plugin'

const withNextIntl = intlPlugin()

export default withNextIntl({
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp']
  }
})
