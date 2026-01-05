import { Metadata } from 'next'
import { SEO_CONFIG } from './constants'

export function generatePageMetadata({
  title,
  description,
  keywords,
  path,
  ogImage,
}: {
  title: string
  description: string
  keywords?: string[]
  path?: string
  ogImage?: string
}): Metadata {
  const url = path ? `${SEO_CONFIG.siteUrl}${path}` : SEO_CONFIG.siteUrl

  return {
    title,
    description,
    keywords: keywords || SEO_CONFIG.defaultKeywords.split(', '),
    openGraph: {
      title: `${title} | ${SEO_CONFIG.defaultTitle}`,
      description,
      url,
      siteName: 'RKS Infra',
      images: [
        {
          url: ogImage || SEO_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage || SEO_CONFIG.ogImage],
      creator: SEO_CONFIG.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generateStructuredData(data: Record<string, unknown>) {
  return {
    '@context': 'https://schema.org',
    ...data,
  }
}

