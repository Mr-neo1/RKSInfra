import type { Metadata } from 'next'
import { Server, Shield, CheckCircle, Code, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { SEO_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Why RKS Infra',
  description: 'Learn why RKS Infra is the right choice for your infrastructure cybersecurity needs. Infrastructure-first thinking, enterprise-grade experience, production systems expertise, and operational discipline.',
  keywords: ['why choose RKS Infra', 'infrastructure security expertise', 'email infrastructure specialists', 'production systems experience', 'enterprise infrastructure', 'reliable infrastructure'],
  openGraph: {
    title: 'Why RKS Infra | Infrastructure-First Cybersecurity',
    description: 'Infrastructure-first thinking, enterprise-grade experience, and production systems expertise.',
    url: `${SEO_CONFIG.siteUrl}/why-rks-infra`,
    type: 'website',
  },
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/why-rks-infra`,
  },
}

export default function WhyRKSInfraPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Why RKS Infra
            </h1>
            <p className="text-xl text-light-gray leading-relaxed">
              We are an infrastructure-first cybersecurity agency. Our approach, expertise, and focus differentiate us in a market filled with generic IT services.
            </p>
          </div>
        </Container>
      </Section>

      {/* Infrastructure-First Thinking */}
      <Section>
        <Container size="lg">
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-block p-4 bg-security-blue/10 border border-security-blue/20 rounded-xl mb-6">
                  <Server className="w-10 h-10 text-cyan-highlight" />
                </div>
                <h2 className="text-4xl font-bold mb-6">Infrastructure-First Thinking</h2>
                <p className="text-lg text-light-gray leading-relaxed mb-6">
                  Unlike agencies that add security as an afterthought, we design solutions from the infrastructure layer upward. Every recommendation, every implementation, and every optimization considers the foundational systems that power your operations.
                </p>
                <p className="text-medium-gray leading-relaxed mb-6">
                  This means email infrastructure is designed for reliability first, then enhanced with security. Network security is built into the architecture, not bolted on. Server management focuses on operational excellence, then adds layers of protection.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-1" />
                    <span className="text-light-gray">Solutions designed for production-scale operations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-1" />
                    <span className="text-light-gray">Reliability and security as integrated principles</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-1" />
                    <span className="text-light-gray">Scalability considerations built into every design</span>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-neutral-900/50 rounded-2xl border border-neutral-800">
                <div className="space-y-6">
                  <div className="p-4 bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 rounded-lg border border-security-blue/20">
                    <h3 className="font-bold mb-2 text-white">Foundation-First</h3>
                    <p className="text-medium-gray text-sm">We build solid infrastructure foundations before adding features or security layers.</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 rounded-lg border border-security-blue/20">
                    <h3 className="font-bold mb-2 text-white">Systems Thinking</h3>
                    <p className="text-medium-gray text-sm">Every component is designed to work with the entire system, not in isolation.</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 rounded-lg border border-security-blue/20">
                    <h3 className="font-bold mb-2 text-white">Operational Excellence</h3>
                    <p className="text-medium-gray text-sm">Infrastructure must be maintainable, monitorable, and reliable for long-term success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Enterprise-Grade Experience */}
      <Section variant="gradient">
        <Container size="lg">
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-security-blue/10 border border-security-blue/20 rounded-xl mb-6">
                <Shield className="w-10 h-10 text-cyan-highlight" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Enterprise-Grade Experience</h2>
              <p className="text-xl text-light-gray max-w-3xl mx-auto">
                Our experience comes from working with production systems that businesses depend on daily. We understand the requirements, constraints, and realities of enterprise infrastructure.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h3 className="text-xl font-bold mb-4 text-white">Production Environments</h3>
                <p className="text-medium-gray leading-relaxed">
                  Every implementation is designed for production systems, not test labs. We understand uptime requirements, user impact, and operational constraints.
                </p>
              </div>
              <div className="p-8 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h3 className="text-xl font-bold mb-4 text-white">Scale & Complexity</h3>
                <p className="text-medium-gray leading-relaxed">
                  We work with infrastructure at scale—from single servers to distributed systems. Complex requirements are our standard, not exceptions.
                </p>
              </div>
              <div className="p-8 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h3 className="text-xl font-bold mb-4 text-white">Business Requirements</h3>
                <p className="text-medium-gray leading-relaxed">
                  Technical excellence alone isn't enough. We align infrastructure decisions with business objectives, compliance needs, and operational realities.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Real Production Environments */}
      <Section>
        <Container size="lg">
          <div className="mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Real Production Environments</h2>
              <div className="space-y-6">
                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <h3 className="text-xl font-bold mb-3 text-white">No Lab Experiments</h3>
                  <p className="text-medium-gray leading-relaxed">
                    We don't treat your production systems as learning opportunities. Every solution is based on proven approaches, tested methodologies, and operational best practices refined through real-world implementations.
                  </p>
                </div>
                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <h3 className="text-xl font-bold mb-3 text-white">Reliability Requirements</h3>
                  <p className="text-medium-gray leading-relaxed">
                    Production systems have real users, real dependencies, and real consequences for failures. We design for reliability, plan for failure scenarios, and implement with operational continuity in mind.
                  </p>
                </div>
                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <h3 className="text-xl font-bold mb-3 text-white">Long-Term Operations</h3>
                  <p className="text-medium-gray leading-relaxed">
                    Infrastructure must operate reliably for months and years, not just during initial deployment. We design solutions that are maintainable, monitorable, and sustainable long-term.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Reliability and Operational Discipline */}
      <Section variant="gradient">
        <Container size="lg">
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Reliability and Operational Discipline</h2>
              <p className="text-xl text-light-gray max-w-3xl mx-auto">
                Infrastructure reliability comes from operational discipline—consistent processes, thorough documentation, and systematic approaches to implementation and maintenance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg border border-neutral-700">
                <Code className="w-10 h-10 text-cyan-highlight mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-white">Systematic Approaches</h3>
                <p className="text-medium-gray leading-relaxed mb-4">
                  We follow structured methodologies for every engagement—from initial assessment through implementation and ongoing management. Consistency reduces risk and improves outcomes.
                </p>
                <ul className="space-y-2 text-medium-gray">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>Documented processes for every implementation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>Comprehensive configuration management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>Validation and testing procedures</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg border border-neutral-700">
                <Shield className="w-10 h-10 text-cyan-highlight mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-white">Operational Excellence</h3>
                <p className="text-medium-gray leading-relaxed mb-4">
                  Infrastructure must be maintainable and monitorable. We implement logging, monitoring, alerting, and documentation as standard practice, not optional add-ons.
                </p>
                <ul className="space-y-2 text-medium-gray">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>Comprehensive monitoring and alerting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>Detailed documentation and knowledge transfer</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>Proactive maintenance and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We're Not */}
      <Section>
        <Container size="lg">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">What We're Not</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <h3 className="text-xl font-bold mb-3 text-white">Not a Generic IT Support Company</h3>
                  <p className="text-medium-gray">
                    We specialize in infrastructure cybersecurity—email systems, network security, and server management. We don't offer general IT support, software development, or unrelated services.
                  </p>
                </div>
                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <h3 className="text-xl font-bold mb-3 text-white">Not a Penetration Testing or Bug Bounty Service</h3>
                  <p className="text-medium-gray">
                    We focus on building and securing infrastructure, not breaking into systems. Our expertise is in implementation, configuration, and ongoing management of production systems.
                  </p>
                </div>
                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <h3 className="text-xl font-bold mb-3 text-white">Not a Marketing Agency</h3>
                  <p className="text-medium-gray">
                    We're engineers and infrastructure specialists. We don't do marketing campaigns, content creation, or brand development. Our focus is technical implementation and operational excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient">
        <Container size="lg">
          <div className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work With Infrastructure Specialists?
            </h2>
            <p className="text-xl text-light-gray mb-8 max-w-2xl mx-auto">
              Let's discuss your infrastructure needs and see how our infrastructure-first approach can help your business.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request Infrastructure Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}

