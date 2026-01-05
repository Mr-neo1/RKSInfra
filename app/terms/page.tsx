import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { SEO_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for RKS Infra. Read our terms and conditions for using our services.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms of Service | RKS Infra',
    url: `${SEO_CONFIG.siteUrl}/terms`,
  },
}

export default function TermsPage() {
  return (
    <>
      <Section className="pt-32">
        <Container size="lg">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Terms of Service</h1>
            
            <p className="text-medium-gray mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8 text-light-gray">
              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">1. Agreement to Terms</h2>
                <p>
                  By accessing or using RKS Infra's website and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">2. Description of Services</h2>
                <p>
                  RKS Infra provides infrastructure-first cybersecurity services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email deliverability and inbox placement optimization</li>
                  <li>Email infrastructure setup and configuration</li>
                  <li>Email security and anti-phishing solutions</li>
                  <li>DNS and domain security configuration</li>
                  <li>Network security and firewall configuration</li>
                  <li>Server and infrastructure management</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">3. Service Engagement</h2>
                <h3 className="text-xl font-semibold mb-3 text-white">3.1 Custom Quotes</h3>
                <p>
                  All services are provided with custom quotes tailored to your specific infrastructure needs. Quotes are valid for the period specified and may be subject to change based on updated requirements.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">3.2 Scope of Work</h3>
                <p>
                  The specific scope of work, deliverables, timelines, and pricing will be defined in a separate agreement or statement of work ("SOW") for each engagement.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">3.3 Acceptance</h3>
                <p>
                  Engagement begins upon acceptance of the SOW or proposal, which may be through written confirmation, electronic signature, or commencement of work.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">4. Client Responsibilities</h2>
                <p>Clients are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing accurate information about their infrastructure and requirements</li>
                  <li>Granting necessary access to systems, networks, and resources required for service delivery</li>
                  <li>Maintaining appropriate backups of data and configurations</li>
                  <li>Ensuring compliance with applicable laws and regulations</li>
                  <li>Providing timely feedback and approvals during implementation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">5. Service Delivery</h2>
                <h3 className="text-xl font-semibold mb-3 text-white">5.1 Implementation</h3>
                <p>
                  We will perform services in accordance with industry best practices and the agreed-upon SOW. Implementation timelines are estimates and may be affected by factors outside our control.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">5.2 Testing and Validation</h3>
                <p>
                  All implementations include testing and validation to ensure proper functionality. Clients are responsible for final acceptance testing.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">5.3 Documentation</h3>
                <p>
                  We provide documentation for implementations including configuration details, operational procedures, and support information.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">6. Payment Terms</h2>
                <p>
                  Payment terms will be specified in the SOW or proposal. Generally:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Project-based engagements may require deposits or milestone payments</li>
                  <li>Ongoing management services are typically billed monthly</li>
                  <li>Payment is due within the timeframe specified in the invoice</li>
                  <li>Late payments may result in service suspension</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">7. Intellectual Property</h2>
                <p>
                  Unless otherwise specified in the SOW, client retains ownership of their data, configurations, and systems. RKS Infra retains ownership of its methodologies, tools, and proprietary knowledge.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">8. Confidentiality</h2>
                <p>
                  Both parties agree to maintain confidentiality of proprietary and sensitive information shared during the engagement. This obligation continues after the termination of services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, RKS Infra's liability is limited to the amount paid for the specific service in question. We are not liable for indirect, consequential, or incidental damages.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">10. Warranty and Disclaimers</h2>
                <p>
                  Services are provided "as is" and "as available." While we use industry best practices, we cannot guarantee specific outcomes or that services will be error-free. We make no warranties beyond those expressly stated in the SOW.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">11. Termination</h2>
                <p>
                  Either party may terminate services in accordance with the terms specified in the SOW. Upon termination, clients remain responsible for payment of services rendered up to the termination date.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">12. Force Majeure</h2>
                <p>
                  We are not liable for delays or failures in performance resulting from circumstances beyond our reasonable control, including natural disasters, cyber attacks, or government actions.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">13. Indemnification</h2>
                <p>
                  Clients agree to indemnify and hold RKS Infra harmless from claims arising from client's misuse of services, violation of these Terms, or infringement of third-party rights.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">14. Governing Law and Dispute Resolution</h2>
                <p>
                  These Terms are governed by the laws of India. Any disputes will be resolved through good faith negotiation, and if necessary, through appropriate legal channels in Ludhiana, Punjab, India.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">15. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Material changes will be communicated to active clients. Continued use of services after changes constitutes acceptance of modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">16. Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full effect.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">17. Entire Agreement</h2>
                <p>
                  These Terms, together with any SOW or proposal, constitute the entire agreement between the parties regarding the services, superseding all prior agreements and understandings.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">18. Contact Information</h2>
                <p>
                  For questions about these Terms, please contact us:
                </p>
                <div className="mt-4 p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                  <p><strong>Email:</strong> <a href="mailto:contact@rksinfra.com" className="text-cyan-highlight hover:underline">contact@rksinfra.com</a></p>
                  <p className="mt-2"><strong>Location:</strong> Ludhiana, Punjab, India</p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

