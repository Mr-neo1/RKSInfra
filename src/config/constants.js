/**
 * Application Constants and Configuration
 * 
 * This file contains all configurable constants for easy content management.
 * Update values here to change content across the application.
 */

// Site Information
export const SITE_CONFIG = {
  name: 'RKS Infra',
  tagline: 'Secure Your Email Infrastructure & Network',
  email: 'contact@rksinfra.com',
  phone: '+91 7065219519',
  location: 'Ludhiana, Punjab, India',
  businessHours: '24/7 Support Available',
  responseTime: 'Within 4 hours',
};

// API Configuration
export const API_CONFIG = {
  // Set to true when you have a backend API
  useBackendAPI: false,
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000, // 10 seconds
};

// Web3Forms Configuration (Contact Form)
export const FORM_CONFIG = {
  accessKey: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || 'b6304684-ad60-44ba-9601-af8df41406eb',
  endpoint: 'https://api.web3forms.com/submit',
};

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: 'RKS Infra - Modern IT Solutions & Services',
  defaultDescription: 'Leading IT Solutions Provider. Transform your business with next-generation IT services including software development, cloud solutions, cybersecurity, and more.',
  defaultKeywords: 'email security, network security, IT infrastructure, email deliverability, SPF DKIM DMARC, Sophos firewall, IT consulting',
  siteUrl: process.env.REACT_APP_SITE_URL || 'https://rksinfra.com',
  ogImage: '/og-image.jpg', // Add your Open Graph image
  twitterHandle: '@rksinfra', // Update with your Twitter handle
};

// Feature Flags
export const FEATURES = {
  enableAnalytics: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  enableErrorReporting: process.env.REACT_APP_ENABLE_ERROR_REPORTING === 'true',
  enableChat: process.env.REACT_APP_ENABLE_CHAT === 'false',
};

// Social Media Links
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/rksinfra',
  whatsapp: 'https://wa.me/917065219519', // WhatsApp Business
  email: 'mailto:contact@rksinfra.com',
};

// Navigation Configuration
export const NAVIGATION = {
  main: [
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Solutions', path: '/solutions' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'Network Security & Firewall', path: '/services#network-security' },
    { name: 'Email Deliverability', path: '/services#email-deliverability' },
    { name: 'Email Infrastructure', path: '/services#email-infrastructure' },
    { name: 'DNS & Authentication', path: '/services#dns-authentication' },
    { name: 'Phishing Protection', path: '/services#phishing-protection' },
    { name: 'Server Management', path: '/services#server-management' },
    { name: 'Expert Consulting', path: '/services#consulting' },
  ],
};

// Performance Configuration
export const PERFORMANCE = {
  // Image optimization
  imageQuality: 85,
  lazyLoadImages: true,
  
  // Code splitting
  enableCodeSplitting: true,
  
  // Caching
  cacheMaxAge: 31536000, // 1 year in seconds
};

// Export all as a single object for convenience
const configDefault = {
  SITE_CONFIG,
  API_CONFIG,
  FORM_CONFIG,
  SEO_CONFIG,
  FEATURES,
  SOCIAL_LINKS,
  NAVIGATION,
  PERFORMANCE,
};

export default configDefault;

