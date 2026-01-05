import Link from 'next/link'
import Image from 'next/image'
import { SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Services',
      items: [
        { name: 'Email Deliverability & Inbox Placement', path: '/services/email-deliverability-inbox-placement' },
        { name: 'Email Infrastructure Setup', path: '/services/email-infrastructure-setup' },
        { name: 'Email Security & Anti-Phishing', path: '/services/email-security-anti-phishing' },
        { name: 'DNS & Domain Security', path: '/services/dns-domain-security' },
        { name: 'Network Security & Firewall', path: '/services/network-security-firewall' },
        { name: 'Server & Infrastructure Management', path: '/services/server-infrastructure-management' },
      ],
    },
    {
      title: 'Company',
      items: [
        { name: 'How We Work', path: '/how-we-work' },
        { name: 'Why RKS Infra', path: '/why-rks-infra' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Blog', path: '/blog' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { name: 'FAQ', path: '/resources/faq' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
      ],
    },
    {
      title: 'Connect',
      items: [
        { name: 'Contact', path: '/contact' },
        { name: 'Email', path: SOCIAL_LINKS.email, external: true },
        { name: 'LinkedIn', path: SOCIAL_LINKS.linkedin, external: true },
        { name: 'WhatsApp Business', path: SOCIAL_LINKS.whatsapp, external: true },
      ],
    },
  ]

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4 group" aria-label="RKS Infra Home">
              <div className="relative flex-shrink-0 transition-all duration-300 group-hover:scale-105">
                <div className="relative w-12 h-12 rounded-xl p-1 border border-neutral-700/40 group-hover:border-cyan-highlight/60 shadow-lg transition-all duration-300 bg-gradient-to-br from-neutral-900/60 to-neutral-950/60 backdrop-blur-md">
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-transparent">
                    <Image
                      src="/logo.png"
                      alt="RKS Infra Logo"
                      width={48}
                      height={48}
                      className="object-contain w-full h-full drop-shadow-xl"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">RKS Infra</span>
                <span className="text-xs text-medium-gray/90 leading-none mt-0.5 font-medium">Infrastructure Security</span>
              </div>
            </Link>
            <p className="text-medium-gray mb-2">
              Securing Your Digital Communications
            </p>
            <p className="text-medium-gray text-sm">
              Expert-level email security and network infrastructure management that keeps businesses protected and emails delivered.
            </p>
          </div>
          {footerLinks.map((col, i) => (
            <div key={i}>
              <h3 className="font-bold mb-4 text-white">{col.title}</h3>
              <ul className="space-y-2">
                {col.items.map((item, j) => (
                  <li key={j}>
                    {item.external ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-medium-gray hover:text-cyan-highlight transition-colors"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.path}
                        className="text-medium-gray hover:text-cyan-highlight transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-medium-gray">
            &copy; {currentYear} RKS Infra. All rights reserved. | Built with security in mind | SSL Secured
          </p>
        </div>
      </div>
    </footer>
  )
}

