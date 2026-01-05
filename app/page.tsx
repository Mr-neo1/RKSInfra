import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import TrustIndicators from '@/components/home/TrustIndicators'
import ServicesOverview from '@/components/home/ServicesOverview'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ProcessSection from '@/components/home/ProcessSection'
import CTASection from '@/components/home/CTASection'
import FAQ from '@/components/shared/FAQ'
import StructuredData from '@/components/shared/StructuredData'
import { homeData, coreServices } from '@/lib/content'
import { SEO_CONFIG } from '@/lib/constants'
import { generateStructuredData } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Infrastructure-first cybersecurity agency specializing in email deliverability, email infrastructure setup, DNS security, network security, and server management. Engineer-led implementations for production systems.',
  keywords: ['email deliverability', 'email infrastructure setup', 'SMTP configuration', 'Mailcow setup', 'email security', 'anti-phishing', 'SPF DKIM DMARC', 'DNS security', 'network security', 'firewall configuration', 'server management', 'infrastructure security'],
  openGraph: {
    title: 'RKS Infra - Infrastructure-First Cybersecurity & Email Deliverability',
    description: homeData.hero.subtitle,
    url: SEO_CONFIG.siteUrl,
  },
}

const homepageStructuredData = generateStructuredData({
  '@type': 'WebSite',
  name: 'RKS Infra',
  url: SEO_CONFIG.siteUrl,
  description: homeData.hero.subtitle,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
})

const serviceStructuredData = coreServices.map((service) =>
  generateStructuredData({
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'RKS Infra',
    },
    areaServed: 'Worldwide',
    serviceType: service.title,
  })
)

export default function HomePage() {
  return (
    <>
      <StructuredData data={[homepageStructuredData, ...serviceStructuredData]} />
      <HeroSection hero={homeData.hero} />
      <TrustIndicators indicators={homeData.trustIndicators} />
      <ServicesOverview services={coreServices} />
      <WhyChooseUs />
      <ProcessSection />
      <CTASection title={homeData.cta.title} description={homeData.cta.description} />
      <FAQ faqs={homeData.faq} />
    </>
  )
}

