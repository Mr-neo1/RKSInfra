import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileText, Clock } from 'lucide-react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { SEO_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Expert insights on email deliverability, SPF/DKIM/DMARC configuration, email infrastructure setup, spam prevention, anti-phishing, and network security. Practical guidance for infrastructure professionals.',
  keywords: ['email deliverability blog', 'SPF DKIM DMARC guide', 'email infrastructure tips', 'email security insights', 'spam prevention', 'email authentication', 'infrastructure blog', 'email deliverability articles'],
  openGraph: {
    title: 'Blog & Insights | RKS Infra',
    description: 'Expert insights on email deliverability, infrastructure security, and email authentication.',
    url: `${SEO_CONFIG.siteUrl}/blog`,
    type: 'website',
  },
  alternates: {
    canonical: `${SEO_CONFIG.siteUrl}/blog`,
  },
}

// Sample blog topics - these would be replaced with actual blog posts in a real implementation
const blogTopics = [
  {
    id: 1,
    title: 'Understanding SPF Records: Common Mistakes and Best Practices',
    excerpt: 'SPF (Sender Policy Framework) is fundamental to email authentication, yet many organizations configure it incorrectly. Learn about common SPF mistakes and how to implement proper SPF records for your domains.',
    category: 'Email Authentication',
    readTime: '8 min read',
    tags: ['SPF', 'Email Authentication', 'DNS'],
  },
  {
    id: 2,
    title: 'Why Emails Land in Spam: A Technical Deep Dive',
    excerpt: 'Understanding why emails end up in spam folders requires examining IP reputation, authentication failures, content factors, and sender practices. This guide explains the technical factors affecting inbox placement.',
    category: 'Email Deliverability',
    readTime: '12 min read',
    tags: ['Email Deliverability', 'Spam', 'Inbox Placement'],
  },
  {
    id: 3,
    title: 'DMARC Policy Enforcement: Moving from Monitoring to Quarantine',
    excerpt: 'Implementing DMARC monitoring is just the first step. Learn how to progress from monitoring to quarantine and rejection policies while maintaining email functionality and security.',
    category: 'Email Security',
    readTime: '10 min read',
    tags: ['DMARC', 'Email Security', 'Policy Enforcement'],
  },
  {
    id: 4,
    title: 'Email Infrastructure Mistakes That Cost Businesses',
    excerpt: 'Common email infrastructure mistakes—from shared IP usage to improper authentication—can severely impact deliverability and business operations. This post covers the most critical mistakes to avoid.',
    category: 'Email Infrastructure',
    readTime: '9 min read',
    tags: ['Email Infrastructure', 'Best Practices', 'SMTP'],
  },
  {
    id: 5,
    title: 'DKIM Key Management: Rotation, Security, and Best Practices',
    excerpt: 'DKIM keys require proper management including regular rotation, secure storage, and correct DNS configuration. Learn how to maintain DKIM keys for optimal email security and deliverability.',
    category: 'Email Authentication',
    readTime: '7 min read',
    tags: ['DKIM', 'Email Security', 'Key Management'],
  },
  {
    id: 6,
    title: 'Firewall Configuration for Email Security: Overlaps and Considerations',
    excerpt: 'Network firewalls and email security are deeply connected. Understand how firewall rules impact email delivery, security, and how to configure firewalls to support secure email infrastructure.',
    category: 'Network Security',
    readTime: '11 min read',
    tags: ['Firewall', 'Email Security', 'Network Security'],
  },
  {
    id: 7,
    title: 'Preventing Phishing: Email Security Controls Beyond Authentication',
    excerpt: 'While SPF, DKIM, and DMARC are essential, additional email security controls are needed to prevent phishing. This guide covers content filtering, attachment scanning, and threat intelligence integration.',
    category: 'Email Security',
    readTime: '10 min read',
    tags: ['Phishing', 'Email Security', 'Anti-Phishing'],
  },
  {
    id: 8,
    title: 'Mailcow vs. Traditional SMTP: When to Choose Self-Hosted Email',
    excerpt: 'Self-hosted email infrastructure using Mailcow offers control and flexibility, but requires proper setup and management. Learn when self-hosted email makes sense and what it takes to maintain it.',
    category: 'Email Infrastructure',
    readTime: '9 min read',
    tags: ['Mailcow', 'SMTP', 'Email Infrastructure'],
  },
  {
    id: 9,
    title: 'Email Warm-up Strategies for New IP Addresses',
    excerpt: 'New IP addresses require careful warm-up to establish good sender reputation. This post explains warm-up strategies, volume considerations, and best practices for establishing IP reputation.',
    category: 'Email Deliverability',
    readTime: '8 min read',
    tags: ['IP Reputation', 'Email Warm-up', 'Deliverability'],
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-light-gray leading-relaxed">
              Expert insights on email deliverability, email infrastructure, DNS security, and network security. Practical guidance for infrastructure professionals.
            </p>
          </div>
        </Container>
      </Section>

      {/* Blog Purpose */}
      <Section>
        <Container size="lg">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="p-8 bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-white">Blog Purpose</h2>
              <p className="text-light-gray leading-relaxed mb-4">
                This blog serves two primary purposes:
              </p>
              <ul className="space-y-3 text-medium-gray mb-4">
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-cyan-highlight flex-shrink-0 mt-1" />
                  <span><strong className="text-white">SEO & Authority:</strong> Providing valuable, technical content that demonstrates our expertise and helps potential clients find us through search.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-cyan-highlight flex-shrink-0 mt-1" />
                  <span><strong className="text-white">LinkedIn Outreach:</strong> Sharing insights that establish credibility and initiate conversations with prospects interested in infrastructure security.</span>
                </li>
              </ul>
              <p className="text-medium-gray">
                All content focuses on technical topics related to our core services: email deliverability, authentication protocols, email infrastructure, and security practices.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Content Rules */}
      <Section variant="gradient">
        <Container size="lg">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Content Focus Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h3 className="text-xl font-bold mb-3 text-white">Email Deliverability</h3>
                <p className="text-medium-gray">
                  Topics covering inbox placement, IP reputation, ISP relationships, and deliverability optimization strategies.
                </p>
              </div>
              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h3 className="text-xl font-bold mb-3 text-white">SPF / DKIM / DMARC</h3>
                <p className="text-medium-gray">
                  Deep dives into email authentication protocols, configuration best practices, policy implementation, and troubleshooting.
                </p>
              </div>
              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h3 className="text-xl font-bold mb-3 text-white">Spam & Phishing</h3>
                <p className="text-medium-gray">
                  Understanding spam filters, anti-phishing controls, email security threats, and prevention strategies.
                </p>
              </div>
              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h3 className="text-xl font-bold mb-3 text-white">Email Infrastructure Mistakes</h3>
                <p className="text-medium-gray">
                  Common configuration errors, infrastructure anti-patterns, and lessons learned from production deployments.
                </p>
              </div>
              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h3 className="text-xl font-bold mb-3 text-white">Firewall & Email Security Overlaps</h3>
                <p className="text-medium-gray">
                  How network security and email infrastructure intersect, firewall rules for email, and integrated security approaches.
                </p>
              </div>
              <div className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <h3 className="text-xl font-bold mb-3 text-white">Email Infrastructure Setup</h3>
                <p className="text-medium-gray">
                  SMTP server configuration, Mailcow deployment, DNS integration, and production email system setup.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sample Blog Topics */}
      <Section>
        <Container size="lg">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Sample Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="p-6 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-cyan-highlight/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-cyan-highlight uppercase tracking-wide">
                      {topic.category}
                    </span>
                    <div className="flex items-center space-x-1 text-medium-gray text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{topic.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-highlight transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-medium-gray text-sm mb-4 leading-relaxed">
                    {topic.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {topic.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-neutral-800 border border-neutral-700 rounded text-medium-gray"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-cyan-highlight font-semibold text-sm group-hover:translate-x-2 transition-transform">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Internal Linking Strategy */}
      <Section variant="gradient">
        <Container size="lg">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Internal Linking Strategy</h2>
            <div className="p-8 bg-neutral-900/50 rounded-lg border border-neutral-800">
              <p className="text-light-gray leading-relaxed mb-4">
                Blog posts are strategically linked to:
              </p>
              <ul className="space-y-3 text-medium-gray">
                <li className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-cyan-highlight flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Service Pages:</strong> Each blog post links to relevant service pages where appropriate, helping readers discover our services.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-cyan-highlight flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Related Posts:</strong> Posts link to related topics to keep readers engaged and improve SEO.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-cyan-highlight flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Contact & CTA:</strong> Every post includes contextual calls-to-action for infrastructure assessment or consultation.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-cyan-highlight flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Case Studies:</strong> Relevant case studies are referenced when applicable to demonstrate real-world applications.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container size="lg">
          <div className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Help With Your Infrastructure?
            </h2>
            <p className="text-xl text-light-gray mb-8 max-w-2xl mx-auto">
              If our blog posts resonate with challenges you're facing, let's discuss how we can help implement solutions for your infrastructure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-security-blue to-cyan-highlight text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Request Infrastructure Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}

