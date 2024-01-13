import createMiddleware from 'next-intl/middleware'

import { localePrefix, locales } from './app/navigation'

export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales
})

console.log('matcher', [`/', '/(${locales.join('|')})/:path*`])

export const config = {
  matcher: [
    // // Match only internationalized pathnames
    // `/', '/(${locales.join('|')})/:path*`,

    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}
