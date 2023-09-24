// import createMiddleware from 'next-intl/middleware'
// import { i18n } from './i18n'
// export default createMiddleware(i18n)
// export const config = {
//   // Skip all paths that should not be internationalized
//   matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
// }
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en'
})

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
