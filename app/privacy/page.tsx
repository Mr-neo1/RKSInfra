import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { SEO_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for RKS Infra. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | RKS Infra',
    url: `${SEO_CONFIG.siteUrl}/privacy`,
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Section className="pt-32">
        <Container size="lg">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Privacy Policy</h1>
            
            <p className="text-medium-gray mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8 text-light-gray">
              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">1. Introduction</h2>
                <p>
                  RKS Infra ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3 text-white">2.1 Information You Provide</h3>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email address, phone number, company name)</li>
                  <li>Information about your infrastructure needs and requirements</li>
                  <li>Problem descriptions and technical details you share with us</li>
                  <li>Communication records when you contact us</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">2.2 Automatically Collected Information</h3>
                <p>We may automatically collect certain information when you visit our website:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Device and connection information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Deliver our services and fulfill our contractual obligations</li>
                  <li>Send you technical information, updates, and service-related communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations and protect our legal rights</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">4. Information Sharing and Disclosure</h2>
                <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who assist us in operating our website and providing services</li>
                  <li>When required by law or to respond to legal process</li>
                  <li>To protect our rights, property, or safety, or that of our clients</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">6. Your Rights</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Right to access your personal data</li>
                  <li>Right to rectify inaccurate or incomplete data</li>
                  <li>Right to request deletion of your data</li>
                  <li>Right to object to processing of your data</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent where processing is based on consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">7. Cookies and Tracking Technologies</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">9. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">10. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">11. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">12. Changes to This Privacy Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-white">13. Contact Us</h2>
                <p>
                  If you have questions about this privacy policy or wish to exercise your rights, please contact us:
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

