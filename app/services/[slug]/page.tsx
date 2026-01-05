import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CheckCircle, Shield, Mail, Server, Globe, Lock } from 'lucide-react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import StructuredData from '@/components/shared/StructuredData'
import { getServiceBySlug, coreServices } from '@/lib/content'
import { SEO_CONFIG } from '@/lib/constants'
import { generateStructuredData } from '@/lib/seo'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return coreServices.map((service) => ({
    slug: service.slug || '',
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.title,
    description: `${service.description} ${service.details.substring(0, 120)}...`,
    keywords: [service.title, ...service.features, 'email infrastructure', 'email security', 'network security', 'server management', 'infrastructure security', 'production systems'],
    openGraph: {
      title: `${service.title} | RKS Infra`,
      description: service.description,
      url: `${SEO_CONFIG.siteUrl}/services/${slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `${SEO_CONFIG.siteUrl}/services/${slug}`,
    },
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const iconMap: Record<string, typeof Mail> = {
    Mail,
    Shield,
    Server,
    Globe,
  }
  const Icon = iconMap[service.icon] || Shield

  // Generate structured data for service page
  const serviceStructuredData = generateStructuredData({
    '@type': 'Service',
    '@id': `${SEO_CONFIG.siteUrl}/services/${slug}#service`,
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'RKS Infra',
      url: SEO_CONFIG.siteUrl,
    },
    areaServed: 'Worldwide',
    serviceType: service.title,
    category: 'Infrastructure Security',
  })

  const breadcrumbStructuredData = generateStructuredData({
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SEO_CONFIG.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${SEO_CONFIG.siteUrl}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `${SEO_CONFIG.siteUrl}/services/${slug}`,
      },
    ],
  })

  return (
    <>
      <StructuredData data={[serviceStructuredData, breadcrumbStructuredData]} />
      {/* Hero Section */}
      <Section className="pt-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block p-3 bg-security-blue/10 border border-security-blue/20 rounded-xl mb-6">
              <Icon className="w-10 h-10 text-cyan-highlight" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-light-gray mb-8 leading-relaxed">
              {service.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Service Overview */}
      <Section>
        <Container size="lg">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-white">Service Overview</h2>
            <p className="text-lg text-light-gray mb-8 leading-relaxed">
              {service.details}
            </p>

            {/* Problems This Service Solves */}
            <h2 className="text-3xl font-bold mb-6 mt-12 text-white">Problems This Service Solves</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {getServiceProblems(service.slug).map((problem, i) => (
                <div key={i} className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <div className="flex items-start space-x-3">
                    <Lock className="w-5 h-5 text-alert-orange flex-shrink-0 mt-1" />
                    <p className="text-light-gray">{problem}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What We Do */}
            <h2 className="text-3xl font-bold mb-6 mt-12 text-white">What We Do</h2>
            <p className="text-lg text-light-gray mb-6 leading-relaxed">
              Our technical approach includes concrete actions to address your infrastructure and security needs:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-3 p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                  <span className="text-light-gray">{feature}</span>
                </div>
              ))}
            </div>

            {/* How We Do It */}
            <h2 className="text-3xl font-bold mb-6 mt-12 text-white">How We Do It</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="p-6 bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-lg">
                <div className="text-2xl font-bold text-cyan-highlight mb-2">01</div>
                <h3 className="text-xl font-bold mb-2 text-white">Audit</h3>
                <p className="text-medium-gray text-sm">We analyze your current infrastructure, identify gaps, and assess security posture.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-lg">
                <div className="text-2xl font-bold text-cyan-highlight mb-2">02</div>
                <h3 className="text-xl font-bold mb-2 text-white">Implement</h3>
                <p className="text-medium-gray text-sm">Engineer-led deployment of configurations, security controls, and infrastructure components.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-lg">
                <div className="text-2xl font-bold text-cyan-highlight mb-2">03</div>
                <h3 className="text-xl font-bold mb-2 text-white">Validate</h3>
                <p className="text-medium-gray text-sm">We test configurations, verify security controls, and ensure systems operate correctly.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-lg">
                <div className="text-2xl font-bold text-cyan-highlight mb-2">04</div>
                <h3 className="text-xl font-bold mb-2 text-white">Monitor</h3>
                <p className="text-medium-gray text-sm">Ongoing monitoring, maintenance, and optimization to ensure continued performance.</p>
              </div>
            </div>

            {/* Outcomes */}
            <h2 className="text-3xl font-bold mb-6 mt-12 text-white">Outcomes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800 text-center">
                <Shield className="w-8 h-8 text-trust-green mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-white">Security</h3>
                <p className="text-medium-gray text-sm">Enhanced security posture with proper configurations and monitoring.</p>
              </div>
              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800 text-center">
                <Server className="w-8 h-8 text-cyan-highlight mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-white">Reliability</h3>
                <p className="text-medium-gray text-sm">Production-grade infrastructure designed for operational excellence.</p>
              </div>
              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800 text-center">
                <Mail className="w-8 h-8 text-security-blue mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-white">Deliverability</h3>
                <p className="text-medium-gray text-sm">Consistent email delivery to recipient inboxes, not spam folders.</p>
              </div>
              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800 text-center">
                <CheckCircle className="w-8 h-8 text-trust-green mx-auto mb-3" />
                <h3 className="font-bold mb-2 text-white">Stability</h3>
                <p className="text-medium-gray text-sm">Long-term stability with ongoing monitoring and maintenance.</p>
              </div>
            </div>

            {/* Engagement Model */}
            <h2 className="text-3xl font-bold mb-6 mt-12 text-white">Engagement Model</h2>
            <div className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg border border-neutral-700 mb-12">
              <p className="text-lg text-light-gray mb-4">
                All our services are provided with <strong className="text-white">custom quotes</strong> tailored to your specific infrastructure needs, scale, and requirements.
              </p>
              <p className="text-medium-gray">
                We work with businesses of all sizes—from startups to enterprises—and design solutions that fit your technical requirements and budget. Every engagement begins with a comprehensive assessment to understand your current state and desired outcomes.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient">
        <Container size="lg">
          <div className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-light-gray mb-8">
              Contact us to request a custom quote for {service.title}
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request a Custom Quote
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}

// Helper function to get service-specific problems
function getServiceProblems(slug?: string): string[] {
  const problemsMap: Record<string, string[]> = {
    'email-deliverability-inbox-placement': [
      'Emails landing in spam folders instead of inboxes',
      'Low inbox placement rates affecting business communication',
      'IP reputation issues causing deliverability problems',
      'Missing or incorrect email authentication (SPF, DKIM, DMARC)',
      'ISP blocking or filtering legitimate emails',
      'Bounce rates and complaint rates impacting sender reputation'
    ],
    'email-infrastructure-setup': [
      'Need for reliable, production-grade email infrastructure',
      'Existing email systems not meeting reliability requirements',
      'Complex email infrastructure migrations',
      'Lack of proper SMTP server configuration',
      'Mailcow deployment and configuration challenges',
      'DNS integration issues with email systems'
    ],
    'email-security-anti-phishing': [
      'Phishing attacks targeting your organization',
      'Email-borne malware and security threats',
      'Lack of email filtering and content analysis',
      'Need for comprehensive email security controls',
      'Security incidents through email channels',
      'Compliance requirements for email security'
    ],
    'dns-domain-security': [
      'Domain spoofing and email authentication failures',
      'Missing or incorrect SPF, DKIM, DMARC records',
      'DNS security vulnerabilities',
      'Email authentication not passing validation',
      'Need for comprehensive domain security',
      'Compliance requirements for email authentication'
    ],
    'network-security-firewall': [
      'Network security vulnerabilities and gaps',
      'Need for proper firewall configuration',
      'Lack of network segmentation and access controls',
      'Threat monitoring and intrusion detection needs',
      'VPN and remote access security requirements',
      'Compliance requirements for network security'
    ],
    'server-infrastructure-management': [
      'Unreliable server performance and uptime',
      'Security vulnerabilities due to outdated systems',
      'Lack of proper monitoring and alerting',
      'Backup and disaster recovery gaps',
      'Need for ongoing infrastructure maintenance',
      'Scalability and capacity planning challenges'
    ],
  }
  return problemsMap[slug || ''] || [
    'Infrastructure reliability and security concerns',
    'Need for expert technical implementation',
    'Production system requirements not being met'
  ]
}
