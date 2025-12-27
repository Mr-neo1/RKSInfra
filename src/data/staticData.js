// Static data for frontend when API is unavailable
// This matches the structure from server/models

export const staticHomeData = {
  hero: {
    badge: "🛡️ Trusted Email & Network Security Experts",
    title: "Stop Emails Going to Spam. Secure Your Network. Stay Protected.",
    subtitle: "We fix email deliverability issues, configure enterprise-grade firewalls, and manage your infrastructure so you can focus on your business—not technical headaches.",
    stats: [
      "✓ 99.9% Email Deliverability Rate",
      "✓ 24/7 Infrastructure Monitoring",
      "✓ <2hr Critical Issue Response"
    ]
  },
  trustIndicators: [
    { number: "500+", label: "Servers Managed" },
    { number: "98%", label: "Inbox Delivery" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ],
  whyChooseUs: {
    title: "Why Businesses Trust RKS Infra",
    differentiators: [
      {
        title: "Hands-On Experience, Not Theory",
        description: "We work on live production systems daily. Practical solutions that work in real-world scenarios. No textbook answers—only proven fixes."
      },
      {
        title: "Transparent Communication",
        description: "Clear explanations in plain language. Regular status updates. No hidden fees or surprise charges."
      },
      {
        title: "Rapid Response Time",
        description: "Critical issues resolved within 2 hours. 24/7 monitoring and support. Proactive problem prevention."
      },
      {
        title: "Results-Driven Approach",
        description: "Success measured by deliverability rates. Reduced spam complaints. Zero-downtime track record."
      },
      {
        title: "Flexible Engagement Models",
        description: "Hourly consulting. Monthly retainers. Project-based work. Long-term partnerships."
      },
      {
        title: "Ongoing Optimization",
        description: "Continuous monitoring and improvements. Regular security updates. Performance tuning included."
      }
    ]
  },
  process: {
    title: "How We Work With You",
    steps: [
      {
        step: 1,
        title: "Discovery & Audit",
        icon: "Search",
        description: "Free initial consultation. Comprehensive email/network audit. Identify current issues and vulnerabilities. Provide detailed analysis report."
      },
      {
        step: 2,
        title: "Strategy & Planning",
        icon: "FileText",
        description: "Custom solution design. Timeline and scope definition. Transparent pricing. Clear deliverables outlined."
      },
      {
        step: 3,
        title: "Implementation",
        icon: "Settings",
        description: "Hands-on configuration and setup. Minimal disruption to operations. Testing and validation. Documentation provided."
      },
      {
        step: 4,
        title: "Monitor & Optimize",
        icon: "BarChart",
        description: "Continuous monitoring. Proactive issue detection. Regular performance reports. Ongoing improvements."
      }
    ]
  },
  successMetrics: [
    {
      title: "Email Deliverability",
      before: "65% inbox rate",
      after: "98% inbox rate",
      description: "Recovered sender reputation and fixed authentication"
    },
    {
      title: "Network Security",
      before: "12+ security incidents/month",
      after: "Zero breaches in 18 months",
      description: "Implemented enterprise firewall with 24/7 monitoring"
    },
    {
      title: "Infrastructure Uptime",
      before: "94% uptime",
      after: "99.9% uptime",
      description: "Proactive monitoring and rapid response protocols"
    }
  ],
  technologies: {
    title: "Technologies We Master",
    categories: [
      {
        category: "Email Infrastructure",
        tools: ["Mailcow", "Postfix/Exim", "SMTP protocols", "PowerMTA", "Email testing tools"]
      },
      {
        category: "Network Security",
        tools: ["Sophos Firewalls", "Sophos Switches", "VPN Technologies", "IDS/IPS systems", "Network monitoring tools"]
      },
      {
        category: "DNS & Authentication",
        tools: ["SPF/DKIM/DMARC", "DNS management", "SSL/TLS certificates", "Domain authentication"]
      },
      {
        category: "Server Management",
        tools: ["Hetzner infrastructure", "NetShop platforms", "Linux server administration", "Monitoring dashboards", "Backup solutions"]
      },
      {
        category: "CRM Integration",
        tools: ["Email-CRM connectors", "API integrations", "Campaign management", "Analytics platforms"]
      }
    ]
  },
  industries: [
    {
      name: "E-commerce & Retail",
      description: "Transactional email delivery, marketing campaign optimization, high-volume email infrastructure"
    },
    {
      name: "SaaS & Tech Companies",
      description: "Application email delivery, user notification systems, secure network infrastructure"
    },
    {
      name: "Digital Marketing Agencies",
      description: "Client campaign delivery, multi-domain management, reputation protection"
    },
    {
      name: "Financial Services",
      description: "Secure communications, compliance requirements, network security hardening"
    },
    {
      name: "Healthcare & Medical",
      description: "HIPAA-compliant email, secure data transmission, patient communication systems"
    },
    {
      name: "Professional Services",
      description: "Client communication, document delivery, secure remote access"
    }
  ],
  supportModels: {
    title: "Flexible Support Options",
    models: [
      {
        type: "Project-Based",
        description: "One-time setup or fix, specific issue resolution, migration projects",
        bestFor: "One-time needs, specific problems",
        startingAt: "Competitive rates"
      },
      {
        type: "Hourly Consulting",
        description: "Pay as you go, on-demand expertise, troubleshooting and optimization",
        bestFor: "Occasional needs, consulting",
        startingAt: "Flexible pricing"
      },
      {
        type: "Managed Services (Retainer)",
        description: "Monthly ongoing support, 24/7 monitoring, proactive management, priority response times",
        bestFor: "Continuous infrastructure management",
        startingAt: "Monthly retainer"
      }
    ]
  },
  faq: [
    {
      question: "Why are my emails going to spam?",
      answer: "Common causes include authentication issues (SPF/DKIM/DMARC not properly configured), poor sender reputation, content triggering spam filters, or IP address reputation problems. We can audit your setup and fix these issues."
    },
    {
      question: "How quickly can you fix email deliverability issues?",
      answer: "Initial audit: 24-48 hours. Basic fixes: 2-5 days. Full optimization: 1-2 weeks. Response time depends on issue severity and complexity."
    },
    {
      question: "Do you work with specific email platforms?",
      answer: "We're platform agnostic and have experience with all major email providers. We can create custom solutions for unique needs."
    },
    {
      question: "What's included in server management?",
      answer: "24/7 monitoring, security patches, performance optimization, backup management, and incident response are all included in our managed services."
    },
    {
      question: "Can you help with firewall configuration remotely?",
      answer: "Yes, we provide full remote support with secure access protocols, hands-on configuration, and complete testing and validation."
    },
    {
      question: "What's your response time for critical issues?",
      answer: "Critical issues: <2 hours. High priority: <4 hours. Standard requests: <24 hours."
    },
    {
      question: "Do you offer one-time services or only ongoing?",
      answer: "Both are available. We offer flexible engagement models including project-based work or ongoing retainer services."
    },
    {
      question: "Can you migrate my existing email infrastructure?",
      answer: "Yes, we provide seamless migration with a zero-downtime approach, complete data transfer, and thorough testing before switchover."
    },
    {
      question: "What makes your service different from others?",
      answer: "We provide hands-on production experience, not just consulting. We actually implement solutions with a proven track record and transparent communication."
    },
    {
      question: "How do I get started?",
      answer: "Start with a free consultation and email/network audit. We'll provide a custom proposal with clear timeline and pricing."
    }
  ],
  cta: {
    title: "Ready to Secure Your Infrastructure?",
    description: "Get a free email deliverability audit and see how we can help protect your business"
  }
};

export const staticServices = [
  {
    id: 1,
    icon: "Shield",
    title: "Network Security & Firewall Management",
    description: "Complete firewall configuration and hardening with Sophos expertise",
    details: "We provide comprehensive network security solutions including complete firewall configuration and hardening, Sophos firewall & switch expertise, VPN setup for secure remote access, real-time threat monitoring and response, and protection against unauthorized access.",
    keyBenefit: "Your network, impenetrable",
    features: [
      "Complete firewall configuration and hardening",
      "Sophos firewall & switch expertise",
      "VPN setup for secure remote access",
      "Real-time threat monitoring and response",
      "Protection against unauthorized access"
    ]
  },
  {
    id: 2,
    icon: "Mail",
    title: "Email Deliverability & Spam Prevention",
    description: "Fix emails landing in spam and optimize inbox placement",
    details: "We specialize in fixing emails that land in spam/junk folders, optimizing inbox placement for marketing emails, improving transactional email delivery, reputation monitoring and recovery, and ongoing deliverability optimization.",
    keyBenefit: "Get your emails into the inbox",
    features: [
      "Fix emails landing in spam/junk folders",
      "Optimize inbox placement for marketing emails",
      "Improve transactional email delivery",
      "Reputation monitoring and recovery",
      "Ongoing deliverability optimization"
    ]
  },
  {
    id: 3,
    icon: "Server",
    title: "Email Infrastructure Engineering",
    description: "SMTP server setup, Mailcow deployment, and email system optimization",
    details: "We handle SMTP server setup and configuration, Mailcow and custom mail server deployment, email system migration and optimization, performance tuning and monitoring, and sending limit management.",
    keyBenefit: "Reliable email infrastructure",
    features: [
      "SMTP server setup and configuration",
      "Mailcow and custom mail server deployment",
      "Email system migration and optimization",
      "Performance tuning and monitoring",
      "Sending limit management"
    ]
  },
  {
    id: 4,
    icon: "Globe",
    title: "Domain & DNS Email Authentication",
    description: "SPF, DKIM, DMARC setup and DNS troubleshooting for email",
    details: "We provide SPF, DKIM, DMARC setup and optimization, DNS troubleshooting for email issues, domain security hardening, authentication monitoring, and prevent domain spoofing.",
    keyBenefit: "Authenticate and protect your domain",
    features: [
      "SPF, DKIM, DMARC setup and optimization",
      "DNS troubleshooting for email issues",
      "Domain security hardening",
      "Authentication monitoring",
      "Prevent domain spoofing"
    ]
  },
  {
    id: 5,
    icon: "ShieldCheck",
    title: "Phishing & Email Threat Protection",
    description: "Identify and block phishing attempts, brand impersonation prevention",
    details: "We help identify and block phishing attempts, provide email-based threat analysis, brand impersonation prevention, advanced email authentication, and security incident response.",
    keyBenefit: "Stop threats before they reach you",
    features: [
      "Identify and block phishing attempts",
      "Email-based threat analysis",
      "Brand impersonation prevention",
      "Advanced email authentication",
      "Security incident response"
    ]
  },
  {
    id: 6,
    icon: "Monitor",
    title: "Server & Infrastructure Management",
    description: "24/7 monitoring, uptime optimization, and proactive issue resolution",
    details: "We provide continuous server monitoring (Hetzner, NetShop), email + CRM integration support, uptime and performance optimization, security patch management, and proactive issue resolution.",
    keyBenefit: "Always-on infrastructure",
    features: [
      "Continuous server monitoring (Hetzner, NetShop)",
      "Email + CRM integration support",
      "Uptime and performance optimization",
      "Security patch management",
      "Proactive issue resolution"
    ]
  },
  {
    id: 7,
    icon: "Users",
    title: "Expert Consulting & Hands-On Support",
    description: "Practical, production-ready solutions with flexible engagement models",
    details: "We offer practical, production-ready solutions, live system troubleshooting, campaign-ready email setup, flexible engagement models, and a results-driven approach.",
    keyBenefit: "Real fixes, not theory",
    features: [
      "Practical, production-ready solutions",
      "Live system troubleshooting",
      "Campaign-ready email setup",
      "Flexible engagement models",
      "Results-driven approach"
    ]
  }
];

export const staticPortfolio = [
  {
    id: 1,
    title: "E-commerce Email Deliverability Recovery",
    category: "Email Deliverability",
    description: "Recovered sender reputation and fixed authentication issues, increasing inbox placement from 65% to 98%.",
    image: "/images/portfolio/email-deliverability.jpg",
    technologies: ["SPF", "DKIM", "DMARC", "Reputation Management"],
    client: "E-commerce Platform",
    year: 2024
  },
  {
    id: 2,
    title: "Healthcare Network Security Implementation",
    category: "Network Security",
    description: "Deployed enterprise firewall with 24/7 monitoring, achieving zero security incidents in 18 months.",
    image: "/images/portfolio/network-security.jpg",
    technologies: ["Sophos Firewall", "IDS/IPS", "Network Monitoring"],
    client: "Healthcare Provider",
    year: 2023
  },
  {
    id: 3,
    title: "SaaS Email Infrastructure Migration",
    category: "Email Infrastructure",
    description: "Migrated to Mailcow infrastructure, achieving 99.8% delivery rate and reducing costs by 60%.",
    image: "/images/portfolio/email-infrastructure.jpg",
    technologies: ["Mailcow", "SMTP", "Docker", "Monitoring"],
    client: "SaaS Startup",
    year: 2024
  },
  {
    id: 4,
    title: "Financial Services Email Authentication",
    category: "DNS & Authentication",
    description: "Complete SPF/DKIM/DMARC implementation achieving 100% authentication and blocking 90% of phishing attempts.",
    image: "/images/portfolio/email-authentication.jpg",
    technologies: ["SPF", "DKIM", "DMARC", "DNS Management"],
    client: "Financial Services Firm",
    year: 2023
  },
  {
    id: 5,
    title: "Manufacturing Network Security Overhaul",
    category: "Network Security",
    description: "Complete network security overhaul with firewall, VPN, and 24/7 management, achieving 99.9% uptime.",
    image: "/images/portfolio/network-overhaul.jpg",
    technologies: ["Sophos Firewall", "VPN", "Network Monitoring"],
    client: "Manufacturing Company",
    year: 2023
  },
  {
    id: 6,
    title: "Marketing Agency Multi-Domain Reputation Recovery",
    category: "Email Deliverability",
    description: "Recovered sender reputation across multiple domains, increasing campaign success rate by 70%.",
    image: "/images/portfolio/reputation-recovery.jpg",
    technologies: ["Reputation Management", "SPF/DKIM/DMARC", "IP Warming"],
    client: "Marketing Agency",
    year: 2024
  }
];

export const staticProcessData = {
  overview: {
    title: "Our Proven Process",
    description: "We follow a systematic approach that ensures successful outcomes, clear communication, and measurable results."
  },
  steps: [
    {
      step: 1,
      title: "Discovery & Audit",
      icon: "Search",
      duration: "1-3 days",
      description: "We start by understanding your current setup, challenges, and goals.",
      activities: [
        "Free initial consultation call",
        "Comprehensive email/network audit",
        "Security assessment",
        "Performance analysis",
        "Infrastructure review"
      ],
      deliverables: [
        "Detailed audit report",
        "Identified issues and vulnerabilities",
        "Risk assessment",
        "Recommendations document",
        "Proposed solution outline"
      ],
      timeline: "1-3 days",
      communication: "Daily updates via email/phone"
    },
    {
      step: 2,
      title: "Strategy & Planning",
      icon: "FileText",
      duration: "2-5 days",
      description: "We design a custom solution tailored to your specific needs and requirements.",
      activities: [
        "Solution architecture design",
        "Technology selection",
        "Implementation plan creation",
        "Timeline and milestone definition",
        "Resource planning"
      ],
      deliverables: [
        "Detailed project plan",
        "Technical specifications",
        "Timeline with milestones",
        "Cost breakdown",
        "Risk mitigation plan"
      ],
      timeline: "2-5 days",
      communication: "Review meeting + detailed proposal"
    },
    {
      step: 3,
      title: "Implementation",
      icon: "Settings",
      duration: "1-4 weeks",
      description: "We execute the plan with minimal disruption to your operations.",
      activities: [
        "Configuration and setup",
        "Testing and validation",
        "Migration (if applicable)",
        "Security hardening",
        "Performance optimization"
      ],
      deliverables: [
        "Fully configured systems",
        "Testing results",
        "Documentation",
        "Training materials",
        "Handover documentation"
      ],
      timeline: "1-4 weeks (varies by project)",
      communication: "Daily progress updates, weekly status meetings"
    },
    {
      step: 4,
      title: "Monitor & Optimize",
      icon: "BarChart",
      duration: "Ongoing",
      description: "We continuously monitor, optimize, and improve your infrastructure.",
      activities: [
        "24/7 monitoring",
        "Performance tracking",
        "Security monitoring",
        "Regular optimization",
        "Proactive issue detection"
      ],
      deliverables: [
        "Monthly performance reports",
        "Security status updates",
        "Optimization recommendations",
        "Incident reports (if any)",
        "Ongoing support"
      ],
      timeline: "Ongoing",
      communication: "Monthly reports, immediate alerts for critical issues"
    }
  ],
  engagementModels: [
    {
      type: "Project-Based",
      description: "One-time implementation or fix for specific issues",
      bestFor: "Specific problems, migrations, one-time setups",
      timeline: "1-4 weeks typically",
      pricing: "Fixed project fee",
      includes: [
        "Complete implementation",
        "Documentation",
        "30-day post-implementation support",
        "Training"
      ]
    },
    {
      type: "Hourly Consulting",
      description: "Pay-as-you-go expert guidance and troubleshooting",
      bestFor: "Occasional needs, troubleshooting, expert advice",
      timeline: "As needed",
      pricing: "Hourly rate",
      includes: [
        "Expert consultation",
        "Troubleshooting",
        "Guidance and recommendations",
        "Quick fixes"
      ]
    },
    {
      type: "Managed Services",
      description: "Ongoing 24/7 management and support",
      bestFor: "Continuous infrastructure management, 24/7 needs",
      timeline: "Ongoing monthly",
      pricing: "Monthly retainer",
      includes: [
        "24/7 monitoring",
        "Proactive management",
        "Priority support",
        "Regular optimization",
        "Security updates",
        "Performance tuning"
      ]
    }
  ],
  whatToExpect: {
    communication: [
      "Clear, jargon-free explanations",
      "Regular status updates",
      "Transparent timelines",
      "No hidden fees"
    ],
    approach: [
      "Hands-on, practical solutions",
      "Production-ready implementations",
      "Proven methodologies",
      "Results-driven focus"
    ],
    support: [
      "Rapid response times",
      "24/7 availability for critical issues",
      "Comprehensive documentation",
      "Ongoing optimization"
    ]
  },
  successMetrics: [
    "Deliverability rates",
    "Security incident reduction",
    "Uptime improvements",
    "Performance metrics",
    "Cost savings",
    "Client satisfaction"
  ]
};

export const staticSolutions = [
  {
    id: 1,
    category: "Email Deliverability",
    title: "Fix Emails Going to Spam",
    problem: "Your marketing emails are landing in spam folders instead of inboxes, reducing open rates and conversions.",
    solution: "We diagnose and fix authentication issues, optimize sender reputation, and ensure proper SPF/DKIM/DMARC configuration.",
    steps: [
      "Audit current email setup and authentication records",
      "Fix SPF, DKIM, and DMARC misconfigurations",
      "Improve IP and domain reputation",
      "Optimize email content and sending practices",
      "Monitor and maintain inbox placement rates"
    ],
    timeframe: "2-5 days for basic fixes, 1-2 weeks for full optimization",
    technologies: ["SPF", "DKIM", "DMARC", "Email Testing Tools", "Reputation Monitoring"],
    industries: ["E-commerce", "Marketing Agencies", "SaaS", "Newsletters"]
  },
  {
    id: 2,
    category: "Email Deliverability",
    title: "Improve Transactional Email Delivery",
    problem: "Critical transactional emails (order confirmations, passwords) are delayed or not reaching customers.",
    solution: "Set up dedicated transactional email infrastructure with proper authentication and monitoring.",
    steps: [
      "Configure dedicated SMTP server for transactional emails",
      "Set up proper authentication (SPF/DKIM/DMARC)",
      "Implement email queuing and retry logic",
      "Set up monitoring and alerting",
      "Optimize sending rates and IP warming"
    ],
    timeframe: "3-7 days",
    technologies: ["SMTP", "Mailcow", "Postfix", "Monitoring Tools"],
    industries: ["E-commerce", "SaaS", "Financial Services", "Healthcare"]
  },
  {
    id: 3,
    category: "Network Security",
    title: "Enterprise Firewall Configuration",
    problem: "Your network lacks proper firewall protection, leaving you vulnerable to attacks.",
    solution: "Configure and harden enterprise-grade firewall with proper rules, monitoring, and threat prevention.",
    steps: [
      "Assess current network architecture and security needs",
      "Configure Sophos or enterprise firewall",
      "Set up firewall rules and access policies",
      "Implement intrusion prevention systems",
      "Configure monitoring and alerting",
      "Provide documentation and training"
    ],
    timeframe: "1-2 weeks",
    technologies: ["Sophos Firewall", "IDS/IPS", "VPN", "Network Monitoring"],
    industries: ["All Industries", "Healthcare", "Financial Services", "Manufacturing"]
  },
  {
    id: 4,
    category: "Network Security",
    title: "Secure Remote Access Setup",
    problem: "Employees need secure remote access but current VPN setup is unreliable or insecure.",
    solution: "Implement secure VPN solution with proper authentication and access controls.",
    steps: [
      "Design secure remote access architecture",
      "Configure VPN server (OpenVPN, WireGuard, or Sophos VPN)",
      "Set up multi-factor authentication",
      "Configure access policies and user management",
      "Test and optimize performance",
      "Provide user training and documentation"
    ],
    timeframe: "3-5 days",
    technologies: ["VPN", "OpenVPN", "WireGuard", "MFA", "Sophos"],
    industries: ["All Industries", "Remote Teams", "Healthcare", "Financial Services"]
  },
  {
    id: 5,
    category: "Email Infrastructure",
    title: "Mail Server Setup & Migration",
    problem: "Need reliable email server or migrating from unreliable provider.",
    solution: "Deploy and configure Mailcow or custom mail server with proper security and monitoring.",
    steps: [
      "Plan server architecture and requirements",
      "Deploy Mailcow or custom mail server",
      "Configure domains and email accounts",
      "Set up authentication (SPF/DKIM/DMARC)",
      "Migrate existing emails and data",
      "Configure backups and monitoring",
      "Test and optimize performance"
    ],
    timeframe: "1-2 weeks",
    technologies: ["Mailcow", "Postfix", "Dovecot", "Docker", "Backup Solutions"],
    industries: ["All Industries", "SMB", "Enterprise", "Government"]
  },
  {
    id: 6,
    category: "DNS & Authentication",
    title: "Complete Email Authentication Setup",
    problem: "Email authentication not properly configured, causing deliverability issues.",
    solution: "Complete SPF, DKIM, and DMARC setup with proper monitoring and reporting.",
    steps: [
      "Audit current DNS records",
      "Configure SPF records correctly",
      "Set up DKIM signing",
      "Implement DMARC policy",
      "Configure DMARC reporting",
      "Monitor and adjust policies",
      "Provide ongoing management"
    ],
    timeframe: "2-3 days",
    technologies: ["SPF", "DKIM", "DMARC", "DNS Management"],
    industries: ["All Industries"]
  },
  {
    id: 7,
    category: "Server Management",
    title: "24/7 Server Monitoring & Management",
    problem: "Servers need constant monitoring but lack dedicated IT staff.",
    solution: "Provide 24/7 monitoring, proactive management, and rapid incident response.",
    steps: [
      "Set up comprehensive monitoring systems",
      "Configure alerting for critical issues",
      "Implement automated backups",
      "Set up security patch management",
      "Provide 24/7 support and response",
      "Regular performance optimization"
    ],
    timeframe: "Ongoing (setup: 3-5 days)",
    technologies: ["Monitoring Tools", "Backup Solutions", "Automation", "Hetzner", "NetShop"],
    industries: ["All Industries", "SaaS", "E-commerce", "Enterprise"]
  },
  {
    id: 8,
    category: "Phishing Protection",
    title: "Email Threat Protection & Anti-Phishing",
    problem: "Receiving phishing emails and need protection against email-based threats.",
    solution: "Implement multi-layered email security to detect and block phishing attempts.",
    steps: [
      "Assess current email security posture",
      "Configure advanced email authentication",
      "Set up threat detection systems",
      "Implement brand protection",
      "Configure incident response procedures",
      "Provide user training"
    ],
    timeframe: "1 week",
    technologies: ["DMARC", "SPF", "DKIM", "Threat Intelligence", "Email Security"],
    industries: ["All Industries", "Financial Services", "Healthcare", "Government"]
  }
];

export const staticCaseStudies = [
  {
    id: 1,
    title: "E-commerce Email Deliverability Recovery",
    client: "Major E-commerce Platform",
    industry: "E-commerce",
    service: "Email Deliverability",
    challenge: "Marketing emails were landing in spam, resulting in 65% inbox placement rate and significant revenue loss.",
    solution: "Comprehensive email authentication setup, IP reputation recovery, and sending practice optimization.",
    results: {
      inboxRate: "98%",
      openRate: "+45%",
      revenue: "+$2.5M annually",
      timeframe: "3 weeks"
    },
    metrics: [
      { label: "Before: Inbox Rate", value: "65%" },
      { label: "After: Inbox Rate", value: "98%" },
      { label: "Open Rate Increase", value: "+45%" },
      { label: "Revenue Impact", value: "+$2.5M/year" }
    ],
    technologies: ["SPF", "DKIM", "DMARC", "Reputation Management"],
    testimonial: "RKS Infra transformed our email deliverability. Our marketing campaigns now reach customers reliably, directly impacting our bottom line.",
    year: 2024
  },
  {
    id: 2,
    title: "Healthcare Network Security Implementation",
    client: "Regional Healthcare Provider",
    industry: "Healthcare",
    service: "Network Security",
    challenge: "Multiple security incidents per month, HIPAA compliance concerns, and vulnerable network infrastructure.",
    solution: "Enterprise firewall deployment, network segmentation, intrusion prevention, and 24/7 monitoring.",
    results: {
      securityIncidents: "Zero in 18 months",
      compliance: "100% HIPAA compliant",
      uptime: "99.9%",
      timeframe: "2 months"
    },
    metrics: [
      { label: "Before: Security Incidents", value: "12+/month" },
      { label: "After: Security Incidents", value: "Zero (18 months)" },
      { label: "Network Uptime", value: "99.9%" },
      { label: "Compliance Status", value: "100% HIPAA" }
    ],
    technologies: ["Sophos Firewall", "IDS/IPS", "Network Segmentation", "24/7 Monitoring"],
    testimonial: "Since implementing RKS Infra's security solution, we've had zero security breaches. Their expertise gave us peace of mind and full HIPAA compliance.",
    year: 2023
  },
  {
    id: 3,
    title: "SaaS Email Infrastructure Migration",
    client: "SaaS Startup",
    industry: "SaaS",
    service: "Email Infrastructure",
    challenge: "Unreliable email provider causing transaction email delays and user complaints.",
    solution: "Custom Mailcow deployment, seamless migration, and optimized sending infrastructure.",
    results: {
      deliveryRate: "99.8%",
      latency: "<1 second",
      cost: "-60%",
      timeframe: "2 weeks"
    },
    metrics: [
      { label: "Email Delivery Rate", value: "99.8%" },
      { label: "Average Latency", value: "<1 second" },
      { label: "Cost Reduction", value: "-60%" },
      { label: "User Complaints", value: "-95%" }
    ],
    technologies: ["Mailcow", "SMTP", "Docker", "Monitoring"],
    testimonial: "The migration was seamless. Our transactional emails now deliver instantly, and we've cut costs significantly. RKS Infra made it look easy.",
    year: 2024
  },
  {
    id: 4,
    title: "Financial Services Email Authentication",
    client: "Financial Services Firm",
    industry: "Financial Services",
    service: "DNS & Authentication",
    challenge: "Email authentication failures causing compliance issues and client trust concerns.",
    solution: "Complete SPF/DKIM/DMARC implementation with strict policies and monitoring.",
    results: {
      authentication: "100%",
      phishingAttempts: "-90%",
      compliance: "Full compliance",
      timeframe: "1 week"
    },
    metrics: [
      { label: "Email Authentication", value: "100%" },
      { label: "Phishing Attempts Blocked", value: "-90%" },
      { label: "Compliance Status", value: "Full" },
      { label: "Client Trust Score", value: "+40%" }
    ],
    technologies: ["SPF", "DKIM", "DMARC", "DNS Management"],
    testimonial: "RKS Infra's authentication setup eliminated our email security concerns. We're now fully compliant and our clients trust our communications.",
    year: 2023
  },
  {
    id: 5,
    title: "Manufacturing Network Security Overhaul",
    client: "Manufacturing Company",
    industry: "Manufacturing",
    service: "Network Security",
    challenge: "Outdated network security, frequent downtime, and inability to support remote operations.",
    solution: "Complete network security overhaul with firewall, VPN, and infrastructure management.",
    results: {
      uptime: "99.9%",
      securityIncidents: "Zero",
      remoteAccess: "100% enabled",
      timeframe: "3 weeks"
    },
    metrics: [
      { label: "Network Uptime", value: "99.9%" },
      { label: "Security Incidents", value: "Zero" },
      { label: "Remote Access", value: "100% enabled" },
      { label: "Downtime Reduction", value: "-95%" }
    ],
    technologies: ["Sophos Firewall", "VPN", "Network Monitoring", "Infrastructure Management"],
    testimonial: "RKS Infra transformed our network infrastructure. We now have enterprise-grade security and can operate remotely without concerns.",
    year: 2023
  },
  {
    id: 6,
    title: "Marketing Agency Email Reputation Recovery",
    client: "Digital Marketing Agency",
    industry: "Marketing",
    service: "Email Deliverability",
    challenge: "Client email campaigns blocked due to poor sender reputation across multiple domains.",
    solution: "Multi-domain reputation recovery, authentication setup, and sending practice optimization.",
    results: {
      inboxRate: "96%",
      clientRetention: "+85%",
      campaignSuccess: "+70%",
      timeframe: "4 weeks"
    },
    metrics: [
      { label: "Average Inbox Rate", value: "96%" },
      { label: "Client Retention", value: "+85%" },
      { label: "Campaign Success Rate", value: "+70%" },
      { label: "Domain Reputation", value: "Excellent" }
    ],
    technologies: ["Reputation Management", "SPF/DKIM/DMARC", "List Hygiene", "IP Warming"],
    testimonial: "RKS Infra saved our agency. They recovered our sender reputation and our client campaigns now perform exceptionally well.",
    year: 2024
  }
];

