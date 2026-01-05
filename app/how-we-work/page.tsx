import type { Metadata } from 'next'
import { CheckCircle, MessageSquare, Shield, Clock, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { SEO_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'How We Work',
  description: 'Learn about RKS Infra\'s engagement workflow, communication approach, security-first mindset, and no-downtime philosophy. Understand our implementation process for infrastructure projects.',
  keywords: ['how we work', 'engagement process', 'infrastructure implementation', 'email security process', 'network security workflow', 'implementation methodology', 'service delivery process'],
  openGraph: {
    title: 'How We Work | RKS Infra',
    description: 'Learn about RKS Infra\'s engagement workflow, communication approach, and implementation methodology.',
    url: `${SEO_CONFIG.siteUrl}/how-we-work`,
    type: 'website',
  },
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/how-we-work`,
  },
}

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              How We Work
            </h1>
            <p className="text-xl text-light-gray leading-relaxed">
              Our engagement process is designed to minimize risk, ensure clarity, and deliver production-grade infrastructure solutions. Here's how we work with clients.
            </p>
          </div>
        </Container>
      </Section>

      {/* Engagement Workflow */}
      <Section>
        <Container size="lg">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Engagement Workflow</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-security-blue/20 rounded-lg flex items-center justify-center">
                      <span className="text-security-blue font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Initial Consultation</h3>
                      <p className="text-medium-gray">
                        We start with a detailed discussion about your current infrastructure, challenges, and requirements. This helps us understand your technical environment and business needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-security-blue/20 rounded-lg flex items-center justify-center">
                      <span className="text-security-blue font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Infrastructure Assessment</h3>
                      <p className="text-medium-gray">
                        We conduct a comprehensive audit of your current systems, security posture, and infrastructure. This assessment forms the basis for our recommendations and implementation plan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-security-blue/20 rounded-lg flex items-center justify-center">
                      <span className="text-security-blue font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Proposal & Planning</h3>
                      <p className="text-medium-gray">
                        We provide a detailed proposal with technical specifications, implementation timeline, and custom pricing. Once approved, we create a detailed implementation plan with milestones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-security-blue/20 rounded-lg flex items-center justify-center">
                      <span className="text-security-blue font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Implementation</h3>
                      <p className="text-medium-gray">
                        Our engineers implement the solution following best practices. We work in phases, validate each step, and keep you informed throughout the process. Changes are tested in staging before production deployment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-security-blue/20 rounded-lg flex items-center justify-center">
                      <span className="text-security-blue font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Validation & Testing</h3>
                      <p className="text-medium-gray">
                        We thoroughly test all configurations, validate security controls, verify email deliverability, and ensure systems operate as intended. You receive comprehensive documentation and training as needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-security-blue/20 rounded-lg flex items-center justify-center">
                      <span className="text-security-blue font-bold">6</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Ongoing Support</h3>
                      <p className="text-medium-gray">
                        For ongoing management engagements, we provide continuous monitoring, maintenance, and optimization. You receive regular reports and proactive support for infrastructure health.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Communication Approach */}
      <Section variant="gradient">
        <Container size="lg">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Communication Approach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800 text-center">
                <MessageSquare className="w-10 h-10 text-cyan-highlight mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Regular Updates</h3>
                <p className="text-medium-gray text-sm">
                  We provide regular status updates throughout the engagement, keeping you informed of progress and any considerations.
                </p>
              </div>
              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800 text-center">
                <Clock className="w-10 h-10 text-cyan-highlight mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Response Time</h3>
                <p className="text-medium-gray text-sm">
                  We respond to inquiries within 4 hours during business hours. For critical infrastructure issues, we provide rapid response options.
                </p>
              </div>
              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800 text-center">
                <CheckCircle className="w-10 h-10 text-cyan-highlight mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Clear Documentation</h3>
                <p className="text-medium-gray text-sm">
                  All implementations include comprehensive documentation, configuration details, and operational procedures for your team.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Security-First Mindset */}
      <Section>
        <Container size="lg">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Security-First Mindset</h2>
            <div className="max-w-3xl mx-auto">
              <div className="p-8 bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-lg mb-6">
                <Shield className="w-12 h-12 text-trust-green mb-4" />
                <p className="text-lg text-light-gray leading-relaxed mb-4">
                  Security is not an afterthought—it's built into every solution from the ground up. Every configuration, every implementation, and every recommendation considers security implications first.
                </p>
                <p className="text-medium-gray">
                  We implement defense-in-depth strategies, follow security best practices, and ensure compliance with relevant standards. Our security-first approach doesn't sacrifice functionality or usability—it enhances it through proper design.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* No-Downtime Philosophy */}
      <Section variant="gradient">
        <Container size="lg">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">No-Downtime Philosophy</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <h3 className="text-xl font-bold mb-3 text-white">Production Systems Focus</h3>
                  <p className="text-medium-gray">
                    We understand that your infrastructure supports critical business operations. Every implementation is designed to minimize disruption and maintain service availability.
                  </p>
                </div>
                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <h3 className="text-xl font-bold mb-3 text-white">Phased Deployments</h3>
                  <p className="text-medium-gray">
                    We use phased deployment strategies, staging environments, and rollback procedures to ensure smooth transitions. Changes are validated before production deployment.
                  </p>
                </div>
                <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <h3 className="text-xl font-bold mb-3 text-white">Emergency Procedures</h3>
                  <p className="text-medium-gray">
                    For critical systems, we establish emergency procedures and maintain contact protocols to address any issues rapidly, ensuring minimal impact on operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Long-Term Support Options */}
      <Section>
        <Container size="lg">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Long-Term Support Options</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h3 className="text-2xl font-bold mb-4 text-white">Project-Based Engagement</h3>
                <p className="text-medium-gray mb-4">
                  For one-time implementations, migrations, or specific infrastructure projects. We deliver the solution, provide documentation, and offer support during the transition period.
                </p>
                <ul className="space-y-2 text-medium-gray">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>Complete implementation and documentation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>Support during transition period</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>Knowledge transfer to your team</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h3 className="text-2xl font-bold mb-4 text-white">Ongoing Management</h3>
                <p className="text-medium-gray mb-4">
                  For businesses requiring continuous infrastructure management, monitoring, and optimization. We maintain your systems and ensure ongoing reliability and security.
                </p>
                <ul className="space-y-2 text-medium-gray">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>24/7 monitoring and alerting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>Proactive maintenance and updates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>Regular reporting and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Purpose Statement */}
      <Section variant="gradient">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Reducing Buyer Anxiety</h2>
            <p className="text-lg text-light-gray leading-relaxed mb-8">
              We understand that infrastructure projects can feel overwhelming. Our structured approach, clear communication, and proven methodology are designed to give you confidence throughout the engagement. You're not just getting a technical implementation—you're getting a reliable partner who understands production systems.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start a Conversation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}

