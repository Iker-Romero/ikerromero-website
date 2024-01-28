import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

import { defaultLocale, localePrefix, locales } from './consts'

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix
})

export default function middleware(req: NextRequest) {
  console.log('req.url', req.url)
  const res = nextIntlMiddleware(req)
  console.log('res', res)
  return res
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|es)/:path*'
  ]
}
