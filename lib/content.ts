import { Service, CaseStudy, HomeData } from '@/types/content';

// Core Services - Infrastructure-First Cybersecurity
export const coreServices: Service[] = [
  {
    id: 1,
    title: 'Email Deliverability & Inbox Placement',
    description: 'Ensure your emails consistently reach the inbox, not spam folders. Professional deliverability optimization for production email systems.',
    icon: 'Mail',
    keyBenefit: 'Improved inbox placement rates',
    details: 'We solve email deliverability problems that impact your business communication. Our service ensures transactional, marketing, and operational emails reach recipient inboxes through proper authentication, IP reputation management, and ISP relationship optimization.',
    features: [
      'SPF, DKIM, DMARC configuration',
      'IP reputation management and warm-up',
      'Email list hygiene and validation',
      'ISP relationship management',
      'Bounce and complaint handling',
      'Deliverability monitoring and reporting',
      'MTA-STS and BIMI implementation',
      'Authentication failure diagnostics'
    ],
    slug: 'email-deliverability-inbox-placement',
  },
  {
    id: 2,
    title: 'Email Infrastructure Setup',
    description: 'Complete email infrastructure deployment with SMTP servers, Mailcow, or custom MTA configurations. Production-ready email systems.',
    icon: 'Server',
    keyBenefit: 'Production-grade email infrastructure',
    details: 'We design and deploy complete email infrastructure from scratch or migrate existing systems. This includes SMTP server setup, Mailcow installation and configuration, DNS integration, and seamless onboarding for your organization.',
    features: [
      'SMTP server setup and configuration',
      'Mailcow installation and deployment',
      'DNS integration and DNS records',
      'Email client configuration',
      'User management and provisioning',
      'Storage and backup configuration',
      'Performance optimization',
      'Migration from existing systems'
    ],
    slug: 'email-infrastructure-setup',
  },
  {
    id: 3,
    title: 'Email Security & Anti-Phishing',
    description: 'Protect your organization from email-based threats. Anti-phishing protection, email filtering, and security monitoring for enterprise environments.',
    icon: 'Shield',
    keyBenefit: 'Enhanced email security posture',
    details: 'We implement comprehensive email security measures to protect against phishing, malware, spam, and other email-borne threats. Our security implementations integrate with existing infrastructure and provide continuous threat monitoring.',
    features: [
      'Anti-phishing protection setup',
      'Email filtering and content analysis',
      'Attachment and link scanning',
      'SPF, DKIM, DMARC for security',
      'Threat intelligence integration',
      'Security incident response',
      'Email encryption configuration',
      'User awareness and training support'
    ],
    slug: 'email-security-anti-phishing',
  },
  {
    id: 4,
    title: 'DNS & Domain Security',
    description: 'Secure DNS configuration with SPF, DKIM, DMARC records. Domain security hardening and DNS-based security controls.',
    icon: 'Globe',
    keyBenefit: 'Complete domain authentication',
    details: 'We configure and manage DNS security records including SPF, DKIM, and DMARC policies. Our service ensures proper domain authentication, prevents domain spoofing, and provides comprehensive reporting on email authentication.',
    features: [
      'SPF record configuration and optimization',
      'DKIM key generation and DNS setup',
      'DMARC policy implementation',
      'DNS security (DNSSEC) configuration',
      'Domain authentication monitoring',
      'Authentication failure analysis',
      'Policy enforcement and quarantine',
      'Ongoing DNS record management'
    ],
    slug: 'dns-domain-security',
  },
  {
    id: 5,
    title: 'Network Security & Firewall Configuration',
    description: 'Enterprise firewall configuration and network security. Firewall rules, threat prevention, and network infrastructure protection.',
    icon: 'Shield',
    keyBenefit: 'Hardened network security',
    details: 'We configure and manage network security infrastructure including firewalls, intrusion detection systems, and network segmentation. Our implementations focus on protecting production systems while maintaining operational efficiency.',
    features: [
      'Firewall rule configuration and optimization',
      'Network segmentation design',
      'Intrusion detection and prevention',
      'VPN setup and configuration',
      'Access control and network policies',
      'Threat monitoring and alerting',
      'Security audit and assessment',
      'Network security documentation'
    ],
    slug: 'network-security-firewall',
  },
  {
    id: 6,
    title: 'Ongoing Server & Infrastructure Management',
    description: 'Continuous server management, monitoring, and maintenance. Proactive infrastructure management for production systems.',
    icon: 'Server',
    keyBenefit: 'Reliable infrastructure operations',
    details: 'We provide ongoing management and monitoring of your server infrastructure. This includes system updates, performance optimization, security patching, backup management, and 24/7 monitoring for critical systems.',
    features: [
      'Server monitoring and alerting',
      'Security updates and patching',
      'Performance optimization',
      'Backup and disaster recovery',
      'Infrastructure documentation',
      'Incident response and resolution',
      'Capacity planning and scaling',
      'Ongoing infrastructure health checks'
    ],
    slug: 'server-infrastructure-management',
  },
];

export const homeData: HomeData = {
  hero: {
    badge: 'Infrastructure-First Cybersecurity Agency',
    title: 'Secure Email Infrastructure. Reliable Deliverability. Production Systems.',
    subtitle: 'We build and maintain enterprise-grade email infrastructure, network security, and server systems. Engineer-led implementations for businesses that depend on reliable, secure communications.',
    stats: [
      'Production Systems Focus',
      'Infrastructure-First Approach',
      'Engineer-Led Implementation'
    ]
  },
  trustIndicators: [
    { number: 'Infrastructure', label: 'First Philosophy' },
    { number: 'Production', label: 'Systems Expertise' },
    { number: '24/7', label: 'Infrastructure Monitoring' },
    { number: 'Engineer', label: 'Led Implementation' },
  ],
  whyChooseUs: {
    title: 'Why RKS Infra',
    differentiators: [
      {
        title: 'Infrastructure-First Thinking',
        description: 'We approach cybersecurity from an infrastructure perspective. Every solution is built with reliability, scalability, and operational excellence in mind.'
      },
      {
        title: 'Production Systems Experience',
        description: 'We work exclusively with production environments, not test labs. Our implementations are designed for real-world reliability and security.'
      },
      {
        title: 'Engineer-Led Implementation',
        description: 'Experienced engineers handle every implementation. No handoffs, no miscommunication—direct execution by technical experts.'
      },
      {
        title: 'Security + Reliability Focus',
        description: 'We balance security requirements with operational needs. Every security measure is implemented without sacrificing system reliability.'
      },
    ]
  },
  process: {
    title: 'How We Work',
    steps: [
      {
        step: 1,
        icon: 'Search',
        title: 'Audit & Assessment',
        description: 'We analyze your current infrastructure, identify vulnerabilities, and assess email deliverability issues. Comprehensive evaluation of your systems and requirements.'
      },
      {
        step: 2,
        icon: 'Settings',
        title: 'Implementation',
        description: 'Engineer-led deployment of security configurations, email infrastructure, and network hardening. Implementation follows best practices for production systems.'
      },
      {
        step: 3,
        icon: 'CheckCircle',
        title: 'Validation & Testing',
        description: 'We validate every configuration, test email deliverability, verify security controls, and ensure systems operate as intended before handover.'
      },
      {
        step: 4,
        icon: 'BarChart',
        title: 'Monitor & Maintain',
        description: 'Ongoing monitoring of infrastructure health, email deliverability metrics, and security events. Proactive maintenance to prevent issues.'
      },
    ]
  },
  successMetrics: [
    {
      title: 'Email Deliverability',
      before: 'Low Inbox Placement',
      after: 'Consistent Inbox Delivery',
      description: 'Proper authentication and reputation management result in reliable inbox placement for transactional and marketing emails.'
    },
    {
      title: 'Network Security',
      before: 'Security Gaps',
      after: 'Hardened Infrastructure',
      description: 'Comprehensive firewall configuration and threat monitoring eliminate security vulnerabilities in network infrastructure.'
    },
    {
      title: 'System Reliability',
      before: 'Inconsistent Operations',
      after: 'Production-Grade Stability',
      description: 'Proactive monitoring and management ensure consistent uptime and reliable infrastructure operations.'
    }
  ],
  technologies: {
    categories: [
      {
        category: 'Email Infrastructure',
        tools: ['Postfix', 'Mailcow', 'Dovecot', 'Roundcube', 'PowerMTA', 'Exim']
      },
      {
        category: 'Email Security',
        tools: ['SPF', 'DKIM', 'DMARC', 'MTA-STS', 'BIMI', 'ClamAV', 'SpamAssassin']
      },
      {
        category: 'Network Security',
        tools: ['Sophos Firewall', 'pfSense', 'OpenVPN', 'WireGuard', 'Fail2Ban', 'iptables']
      },
      {
        category: 'DNS & Domain',
        tools: ['BIND', 'PowerDNS', 'Cloudflare DNS', 'Route53', 'DNSSEC']
      },
      {
        category: 'Monitoring & Management',
        tools: ['Grafana', 'Prometheus', 'Nagios', 'Zabbix', 'ELK Stack']
      },
      {
        category: 'Server Infrastructure',
        tools: ['Linux Servers', 'Docker', 'Kubernetes', 'Ansible', 'Terraform']
      }
    ]
  },
  industries: [
    {
      name: 'Healthcare',
      description: 'HIPAA-compliant email infrastructure and network security for healthcare organizations.'
    },
    {
      name: 'Finance',
      description: 'Bank-grade security for financial institutions requiring reliable email and network infrastructure.'
    },
    {
      name: 'E-commerce',
      description: 'High-volume email deliverability and secure infrastructure for e-commerce operations.'
    },
    {
      name: 'Technology',
      description: 'Production-grade infrastructure for technology companies with complex email and network requirements.'
    },
    {
      name: 'Professional Services',
      description: 'Secure communications infrastructure for legal, consulting, and professional services firms.'
    },
    {
      name: 'Manufacturing',
      description: 'Reliable network infrastructure and email systems for manufacturing and supply chain operations.'
    }
  ],
  supportModels: {
    title: 'Engagement Models',
    models: [
      {
        type: 'Project-Based',
        description: 'One-time implementation for specific infrastructure needs',
        bestFor: 'Organizations needing initial setup or migration',
        startingAt: 'Custom Quote'
      },
      {
        type: 'Ongoing Management',
        description: 'Continuous monitoring, maintenance, and optimization',
        bestFor: 'Businesses requiring reliable infrastructure operations',
        startingAt: 'Custom Quote'
      },
      {
        type: 'Hybrid Engagement',
        description: 'Combination of project work and ongoing support',
        bestFor: 'Organizations with evolving infrastructure needs',
        startingAt: 'Custom Quote'
      }
    ]
  },
  cta: {
    title: 'Request Infrastructure Assessment',
    description: 'Get a comprehensive evaluation of your email infrastructure, network security, and server systems. Receive actionable recommendations from our engineers.'
  },
  faq: [
    {
      question: 'What is an infrastructure-first approach?',
      answer: 'We design solutions with infrastructure reliability, scalability, and operational excellence as the foundation. Security and functionality are built on top of solid infrastructure principles rather than added as afterthoughts.'
    },
    {
      question: 'Do you work with production systems?',
      answer: 'Yes, we exclusively work with production environments. All our implementations are designed for real-world reliability and security, not test environments or proof-of-concept systems.'
    },
    {
      question: 'How long does email infrastructure setup take?',
      answer: 'Typical email infrastructure deployment takes 1-2 weeks depending on complexity. This includes server setup, DNS configuration, authentication records, and validation testing. Urgent implementations can be completed in 3-5 days.'
    },
    {
      question: 'What makes your email deliverability service different?',
      answer: 'We focus on infrastructure-level deliverability solutions—proper authentication, IP reputation management, and ISP relationships. We work with the underlying systems that determine deliverability, not just surface-level optimization.'
    },
    {
      question: 'Can you migrate existing email infrastructure?',
      answer: 'Yes, we handle migrations from existing email systems including Gmail, Office 365, or other providers. We ensure zero-downtime migrations and maintain deliverability throughout the transition.'
    },
    {
      question: 'Do you provide ongoing infrastructure management?',
      answer: 'Yes, we offer ongoing server and infrastructure management including monitoring, security updates, performance optimization, and incident response. This ensures your systems remain reliable and secure over time.'
    },
    {
      question: 'What network security tools do you work with?',
      answer: 'We primarily work with Sophos Firewall and pfSense for firewall configuration. We also implement VPN solutions, intrusion detection systems, and network monitoring tools based on your specific requirements.'
    },
    {
      question: 'How do you ensure no downtime during implementation?',
      answer: 'We plan all implementations carefully to minimize impact. For critical systems, we use staging environments, phased rollouts, and rollback procedures. Email migrations use parallel systems to ensure continuous operation.'
    }
  ]
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Healthcare Email Infrastructure Overhaul',
    client: 'Regional Hospital Network',
    industry: 'Healthcare',
    service: 'Email Deliverability & Infrastructure Setup',
    year: '2024',
    challenge: 'A regional hospital network with 200+ users was experiencing severe email deliverability issues. Critical patient communications were being marked as spam, and HIPAA compliance was at risk. Their existing email infrastructure lacked proper authentication and had poor IP reputation.',
    solution: 'We implemented complete email infrastructure with proper SPF, DKIM, and DMARC authentication, deployed dedicated email servers with proper warm-up procedures, and configured HIPAA-compliant email encryption. We also set up monitoring and alerting systems to ensure ongoing deliverability.',
    results: {
      inboxRate: '98% Inbox Placement',
      deliveryRate: '99.2% Delivery Rate',
      authentication: '100% Auth Pass Rate'
    },
    metrics: [
      { label: 'Inbox Placement Rate', value: '98%' },
      { label: 'Email Delivery Rate', value: '99.2%' },
      { label: 'Authentication Pass Rate', value: '100%' },
      { label: 'HIPAA Compliance', value: 'Achieved' }
    ],
    technologies: ['Mailcow', 'Postfix', 'DMARC', 'DKIM', 'SPF', 'TLS Encryption', 'Grafana'],
    testimonial: 'RKS Infra transformed our email infrastructure from the ground up. We went from 60% inbox placement to 98%, and our critical communications now reach recipients reliably. Their infrastructure-first approach and healthcare compliance expertise were exactly what we needed.',
    slug: 'healthcare-email-infrastructure-overhaul',
  },
  {
    id: 2,
    title: 'E-commerce Email Deliverability Resolution',
    client: 'Online Retailer',
    industry: 'E-commerce',
    service: 'Email Deliverability & Inbox Placement',
    year: '2024',
    challenge: 'An e-commerce company sending 500K+ emails monthly was seeing only 65% inbox placement. Their transactional and marketing emails were landing in spam, directly impacting revenue. They had no email authentication configured and were using shared IP infrastructure.',
    solution: 'We set up proper SPF, DKIM, and DMARC records, implemented dedicated IP infrastructure with proper warm-up procedures, optimized sending practices, and configured automated bounce handling. We also established relationships with major ISPs and implemented deliverability monitoring.',
    results: {
      inboxRate: '95% Inbox Placement',
      deliveryRate: '97.8% Delivery Rate'
    },
    metrics: [
      { label: 'Inbox Placement Rate', value: '95%' },
      { label: 'Email Delivery Rate', value: '97.8%' },
      { label: 'Revenue Impact', value: 'Significant Improvement' },
      { label: 'Bounce Rate', value: '<2%' }
    ],
    technologies: ['Postfix', 'DMARC', 'DKIM', 'SPF', 'MTA-STS', 'PowerMTA', 'Grafana'],
    testimonial: 'RKS Infra fixed our email deliverability issues at the infrastructure level. Their understanding of ISP relationships, authentication protocols, and reputation management transformed our email operations. The focus on production systems and reliability was exactly what we needed.',
    slug: 'ecommerce-email-deliverability-resolution',
  },
  {
    id: 3,
    title: 'Financial Firm Network Security Hardening',
    client: 'Investment Advisory Firm',
    industry: 'Finance',
    service: 'Network Security & Firewall Configuration',
    year: '2024',
    challenge: 'A financial advisory firm needed to secure their network infrastructure to meet regulatory compliance requirements. They had multiple security incidents and lacked proper firewall configuration, network segmentation, and threat monitoring.',
    solution: 'We implemented Sophos firewall with advanced threat protection, configured network segmentation for secure zones, set up VPN for remote access, and implemented 24/7 monitoring with automated threat response. All implementations followed financial industry security standards.',
    results: {
      securityIncidents: '0 Security Incidents',
      uptime: '99.99% Uptime'
    },
    metrics: [
      { label: 'Security Incidents', value: '0' },
      { label: 'Network Uptime', value: '99.99%' },
      { label: 'Threats Blocked', value: '1,200+/month' },
      { label: 'Compliance Status', value: 'Fully Compliant' }
    ],
    technologies: ['Sophos Firewall', 'OpenVPN', 'Nagios', 'Fail2Ban', 'Network Segmentation'],
    testimonial: 'RKS Infra secured our network infrastructure and helped us achieve full regulatory compliance. We\'ve had zero security incidents since implementation, and their monitoring caught several potential threats before they became issues. The infrastructure-first approach ensured reliability alongside security.',
    slug: 'financial-firm-network-security-hardening',
  },
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return coreServices.find(service => service.slug === slug);
}

// Helper function to get case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug);
}
