import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { caseStudies } from '@/lib/content'
import { SEO_CONFIG } from '@/lib/constants'
import CaseStudiesList from '@/components/case-studies/CaseStudiesList'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real results for real businesses. See how RKS Infra has helped companies improve email deliverability, secure networks, and optimize infrastructure.',
  keywords: ['case studies', 'email deliverability success', 'network security results', 'IT infrastructure success stories'],
  openGraph: {
    title: 'Case Studies | RKS Infra',
    description: 'Real results for real businesses.',
    url: `${SEO_CONFIG.siteUrl}/case-studies`,
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Real Results for <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Real Businesses</span>
            </h1>
            <p className="text-xl text-light-gray">
              See how we've helped companies improve email deliverability, secure networks, and optimize infrastructure
            </p>
          </div>
        </Container>
      </Section>

      {/* Case Studies Grid */}
      <Section>
        <Container>
          <CaseStudiesList caseStudies={caseStudies} />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient">
        <Container size="lg">
          <div className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to See Similar Results?
            </h2>
            <p className="text-xl text-light-gray mb-8">
              Contact us today to discuss how we can help your business
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
