import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { coreServices } from '@/lib/content'
import { SEO_CONFIG } from '@/lib/constants'
import ServicesList from '@/components/services/ServicesList'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Infrastructure-first cybersecurity services including email deliverability, email infrastructure setup, email security, DNS security, network security, and server management. Engineer-led implementations for production systems.',
  keywords: ['email deliverability services', 'email infrastructure setup', 'email security services', 'DNS security services', 'network security services', 'server management', 'SMTP configuration', 'Mailcow setup', 'SPF DKIM DMARC', 'firewall configuration', 'infrastructure security'],
  openGraph: {
    title: 'Our Services | RKS Infra',
    description: 'Infrastructure-first cybersecurity services for production systems. Engineer-led implementations focused on email infrastructure, network security, and server management.',
    url: `${SEO_CONFIG.siteUrl}/services`,
    type: 'website',
  },
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/services`,
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Infrastructure-first cybersecurity services for production systems. Engineer-led implementations focused on email infrastructure, network security, and server management.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section>
        <Container>
          <ServicesList services={coreServices} />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient">
        <Container size="lg">
          <div className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Infrastructure?
            </h2>
            <p className="text-xl text-light-gray mb-8">
              Request a custom quote tailored to your infrastructure needs. All services are provided with detailed proposals based on your specific requirements.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              <span>Request a Custom Quote</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
