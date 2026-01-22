import { MetadataRoute } from 'next'
import { experiences } from '@/data/experiences'
import { destinations } from '@/data/destinations'
import { excursions } from '@/data/excursions'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const baseUrl = siteUrl ? (siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl) : ''

  if (!siteUrl) {
    return []
  }

  // Static routes
  const routes = [
    '',
    '/experiences',
    '/destinations',
    '/about',
    '/contact',
    '/quote',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Experience routes
  const experienceRoutes = experiences.map((experience) => ({
    url: `${baseUrl}/experiences/${experience.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Destination routes
  const destinationRoutes = destinations.map((destination) => ({
    url: `${baseUrl}/destinations/${destination.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Excursion routes
  const excursionRoutes = excursions.map((excursion) => ({
    url: `${baseUrl}/excursions/${excursion.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  // Landing routes (from Phase 8)
  const landings = [
    'cairo-vip',
    'exclusive',
    'luxury-cairo',
    'nile-journey',
    'red-sea-luxury',
  ]
  const landingRoutes = landings.map((slug) => ({
    url: `${baseUrl}/landing/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...routes,
    ...experienceRoutes,
    ...destinationRoutes,
    ...excursionRoutes,
    ...landingRoutes,
  ]
}
