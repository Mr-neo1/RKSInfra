import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import FAQ from '@/components/shared/FAQ'
import { homeData } from '@/lib/content'
import { SEO_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Everything you need to know about RKS Infra email security and network infrastructure services. Get answers to common questions.',
  keywords: ['FAQ', 'email security questions', 'network security FAQ', 'IT infrastructure questions'],
  openGraph: {
    title: 'FAQ | RKS Infra',
    description: 'Everything you need to know about our services.',
    url: `${SEO_CONFIG.siteUrl}/resources/faq`,
  },
}

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-light-gray">
              Everything you need to know about our email security and network infrastructure services
            </p>
          </div>
        </Container>
      </Section>

      <FAQ faqs={homeData.faq} />
    </>
  )
}

