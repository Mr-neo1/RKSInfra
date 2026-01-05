import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import StructuredData from '@/components/shared/StructuredData'
import { SEO_CONFIG, SITE_CONFIG } from '@/lib/constants'
import { generateStructuredData } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contact Us - Get a Custom Quote',
  description: 'Request a custom quote for your infrastructure needs. Contact RKS Infra for email deliverability, email infrastructure setup, network security, and server management services. Response within 4 hours.',
  keywords: ['contact RKS Infra', 'request quote', 'infrastructure consultation', 'email security consultation', 'network security support', 'custom quote', 'infrastructure assessment'],
  openGraph: {
    title: 'Contact Us - Get a Custom Quote | RKS Infra',
    description: 'Request a custom quote for your infrastructure needs. Contact RKS Infra for email deliverability, email infrastructure setup, network security, and server management services.',
    url: `${SEO_CONFIG.siteUrl}/contact`,
    type: 'website',
  },
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/contact`,
  },
}

const contactPageStructuredData = generateStructuredData({
  '@type': 'ContactPage',
  '@id': `${SEO_CONFIG.siteUrl}/contact#contactpage`,
  name: 'Contact RKS Infra',
  description: 'Get in touch with RKS Infra for email security and network infrastructure solutions',
  mainEntity: {
    '@type': 'Organization',
    name: 'RKS Infra',
    url: SEO_CONFIG.siteUrl,
  },
})

const contactPointStructuredData = generateStructuredData({
  '@type': 'ContactPoint',
  '@id': `${SEO_CONFIG.siteUrl}/contact#contactpoint`,
  telephone: SITE_CONFIG.phone,
  contactType: 'Customer Service',
  email: SITE_CONFIG.email,
  areaServed: ['IN', 'US', 'GB', 'CA', 'AU', 'Worldwide'],
  availableLanguage: ['English'],
})

export default function ContactPage() {
  return (
    <>
      <StructuredData data={[contactPageStructuredData, contactPointStructuredData]} />
      
      {/* Hero Section */}
      <Section className="pt-32">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get a <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Quote</span>
            </h1>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Request a custom quote for your infrastructure needs. Fill out the form below and we'll get back to you within 4 hours.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  )
}

