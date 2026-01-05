import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StructuredData from '@/components/shared/StructuredData'
import { SEO_CONFIG, SITE_CONFIG } from '@/lib/constants'
import { generateStructuredData } from '@/lib/seo'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'RKS Infra - Infrastructure-First Cybersecurity & Email Deliverability',
    template: '%s | RKS Infra'
  },
  description: 'Enterprise-grade infrastructure cybersecurity agency specializing in email deliverability, email infrastructure setup, DNS security, network security, and server management. Engineer-led implementations for production systems.',
  keywords: ['email deliverability', 'email infrastructure setup', 'SMTP configuration', 'Mailcow setup', 'email security', 'anti-phishing', 'SPF DKIM DMARC', 'DNS security', 'network security', 'firewall configuration', 'server management', 'infrastructure security', 'cybersecurity agency', 'email authentication', 'production systems'],
  authors: [{ name: 'RKS Infra', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rksinfra.com' }],
  creator: 'RKS Infra',
  publisher: 'RKS Infra',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rksinfra.com'),
  applicationName: 'RKS Infra',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark',
  themeColor: '#020617',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rksinfra.com',
    siteName: 'RKS Infra',
    title: 'RKS Infra - Infrastructure-First Cybersecurity & Email Deliverability',
    description: 'Enterprise-grade infrastructure cybersecurity agency specializing in email deliverability, email infrastructure setup, DNS security, network security, and server management.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'RKS Infra - Infrastructure-First Cybersecurity Agency',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RKS Infra - Infrastructure-First Cybersecurity & Email Deliverability',
    description: 'Enterprise-grade infrastructure cybersecurity agency specializing in email deliverability, email infrastructure setup, DNS security, network security, and server management.',
    images: ['/logo.png'],
    creator: '@rksinfra',
    site: '@rksinfra',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://rksinfra.com',
    languages: {
      'en-US': '/',
    },
  },
  category: 'Technology',
  classification: 'Business Services',
  other: {
    'contact:email': 'contact@rksinfra.com',
    'contact:phone_number': '+917065219519',
    'geo.region': 'IN-PB',
    'geo.placename': 'Ludhiana',
  },
}

const organizationStructuredData = generateStructuredData({
  '@type': 'Organization',
  '@id': `${SEO_CONFIG.siteUrl}#organization`,
  name: 'RKS Infra',
  url: SEO_CONFIG.siteUrl,
  logo: `${SEO_CONFIG.siteUrl}/logo.png`,
  description: 'Infrastructure-first cybersecurity agency specializing in email deliverability, email infrastructure setup, DNS security, network security, and server management.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE_CONFIG.phone,
    contactType: 'Customer Service',
    email: SITE_CONFIG.email,
    areaServed: ['IN', 'US', 'GB', 'CA', 'AU', 'Worldwide'],
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ludhiana',
    addressRegion: 'Punjab',
    postalCode: '',
    addressCountry: 'IN',
  },
  sameAs: [
    SEO_CONFIG.siteUrl,
    // Add social media URLs when available
  ],
})

const localBusinessStructuredData = generateStructuredData({
  '@type': 'LocalBusiness',
  '@id': `${SEO_CONFIG.siteUrl}#localbusiness`,
  name: 'RKS Infra',
  image: `${SEO_CONFIG.siteUrl}/logo.png`,
  url: SEO_CONFIG.siteUrl,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ludhiana',
    addressRegion: 'Punjab',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    // Add coordinates if available
  },
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'Worldwide',
  },
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <StructuredData data={[organizationStructuredData, localBusinessStructuredData]} />
        <Header />
        <main className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

