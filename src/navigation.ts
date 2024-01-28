import { createSharedPathnamesNavigation } from 'next-intl/navigation'

import { localePrefix, locales } from './consts'

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })
