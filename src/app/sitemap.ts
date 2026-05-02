import { BASE_URL, locales } from 'consts'
import type { MetadataRoute } from 'next'

const pages = ['', '/contact', '/terms', '/privacy-policy']

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(page =>
    locales.map(locale => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date()
    }))
  )
}
