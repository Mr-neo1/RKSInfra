/**
 * Application Constants and Configuration
 * 
 * This file contains all configurable constants for easy content management.
 * Update values here to change content across the application.
 */

// Site Information
export const SITE_CONFIG = {
  name: 'RKS Infra',
  tagline: 'Infrastructure-First Cybersecurity Agency',
  email: 'contact@rksinfra.com',
  phone: '+91 7065219519',
  location: 'Ludhiana, Punjab, India',
  businessHours: '24/7 Infrastructure Monitoring Available',
  responseTime: 'Within 4 hours',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://rksinfra.com',
} as const;

// Web3Forms Configuration (Contact Form)
export const FORM_CONFIG = {
  accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'b6304684-ad60-44ba-9601-af8df41406eb',
  endpoint: 'https://api.web3forms.com/submit',
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: 'RKS Infra - Infrastructure-First Cybersecurity & Email Deliverability',
  defaultDescription: 'Enterprise-grade infrastructure cybersecurity agency specializing in email deliverability, email security, DNS security, network security, and server management. Engineer-led implementations for production systems.',
  defaultKeywords: 'email deliverability, email infrastructure setup, SMTP configuration, Mailcow setup, email security, anti-phishing, SPF DKIM DMARC, DNS security, network security, firewall configuration, server management, infrastructure security',
  siteUrl: SITE_CONFIG.siteUrl,
  ogImage: '/og-image.jpg',
  twitterHandle: '@rksinfra',
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/rksinfra',
  whatsapp: 'https://wa.me/917065219519',
  email: 'mailto:contact@rksinfra.com',
} as const;

// Navigation Configuration
export const NAVIGATION = {
  main: [
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'Why RKS Infra', path: '/why-rks-infra' },
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'FAQ', path: '/resources/faq' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'Email Deliverability & Inbox Placement', path: '/services/email-deliverability-inbox-placement' },
    { name: 'Email Infrastructure Setup', path: '/services/email-infrastructure-setup' },
    { name: 'Email Security & Anti-Phishing', path: '/services/email-security-anti-phishing' },
    { name: 'DNS & Domain Security', path: '/services/dns-domain-security' },
    { name: 'Network Security & Firewall', path: '/services/network-security-firewall' },
    { name: 'Server & Infrastructure Management', path: '/services/server-infrastructure-management' },
  ],
} as const;

// Performance Configuration
export const PERFORMANCE = {
  imageQuality: 85,
  lazyLoadImages: true,
  enableCodeSplitting: true,
  cacheMaxAge: 31536000, // 1 year in seconds
} as const;

