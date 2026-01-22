import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const baseUrl = siteUrl ? (siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl) : ''

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/login', '/api/'],
    },
    sitemap: siteUrl ? `${baseUrl}/sitemap.xml` : undefined,
  }
}
