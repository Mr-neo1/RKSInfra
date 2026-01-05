import { MetadataRoute } from 'next'
import { SEO_CONFIG } from '@/lib/constants'
import { coreServices, caseStudies } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_CONFIG.siteUrl

  const routes = [
    '',
    '/services',
    '/how-we-work',
    '/why-rks-infra',
    '/blog',
    '/case-studies',
    '/contact',
    '/resources/faq',
    '/privacy',
    '/terms',
  ]

  const serviceRoutes = coreServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1.0 : 0.8,
  }))

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes]
}

