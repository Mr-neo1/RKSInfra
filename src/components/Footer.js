import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { SOCIAL_LINKS } from '../config/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      items: [
        { name: 'Network Security', path: '/services#network-security' },
        { name: 'Email Deliverability', path: '/services#email-deliverability' },
        { name: 'Email Infrastructure', path: '/services#email-infrastructure' },
        { name: 'DNS & Authentication', path: '/services#dns-authentication' },
        { name: 'Phishing Protection', path: '/services#phishing-protection' },
        { name: 'Server Management', path: '/services#server-management' },
        { name: 'Expert Consulting', path: '/services#consulting' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'FAQ', path: '/#faq' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
      ],
    },
    {
      title: 'Connect',
      items: [
        { name: 'Email', path: SOCIAL_LINKS.email, external: true },
        { name: 'LinkedIn', path: SOCIAL_LINKS.linkedin, external: true },
        { name: 'WhatsApp Business', path: SOCIAL_LINKS.whatsapp, external: true },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-security-blue to-shield-purple rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">RKS Infra</span>
            </div>
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
                        to={item.path}
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
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-medium-gray">
            &copy; {currentYear} RKS Infra. All rights reserved. | Built with security in mind | SSL Secured
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
