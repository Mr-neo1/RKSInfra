// Static data for fast loading - no API calls needed
export const staticData = {
  services: [
    {
      id: 1,
      title: "Email Infrastructure Setup",
      description: "Complete email server configuration and security implementation",
      icon: "Mail",
      keyBenefit: "99.9% email deliverability rate with proper authentication",
      details: "We set up and configure your email infrastructure from scratch, ensuring all security protocols are in place. Our team handles SPF, DKIM, and DMARC configuration to ensure maximum deliverability and security.",
      features: ["SMTP Configuration", "Security Protocols", "Spam Protection", "Monitoring", "Backup & Recovery", "Performance Optimization"]
    },
    {
      id: 2,
      title: "Network Security & Firewall",
      description: "Comprehensive network security solutions and monitoring",
      icon: "Shield",
      keyBenefit: "Zero security breaches with 24/7 monitoring",
      details: "Enterprise-grade network security with Sophos firewall configuration, intrusion detection systems, and continuous threat monitoring. We secure your entire network infrastructure.",
      features: ["Firewall Setup", "Intrusion Detection", "VPN Configuration", "Security Audits", "Threat Monitoring", "Access Control"]
    },
    {
      id: 3,
      title: "Email Deliverability",
      description: "Ensure your emails reach the inbox, not spam",
      icon: "ShieldCheck",
      keyBenefit: "95%+ inbox placement rate",
      details: "Specialized email deliverability services that ensure your emails consistently reach the inbox. We manage IP reputation, maintain list hygiene, and optimize authentication protocols.",
      features: ["IP Reputation Management", "List Hygiene", "Authentication Setup", "ISP Relationships", "Bounce Management", "Deliverability Monitoring"]
    },
    {
      id: 4,
      title: "DNS & Authentication",
      description: "Proper DNS configuration and email authentication",
      icon: "Globe",
      keyBenefit: "100% authentication pass rate",
      details: "Expert DNS configuration and email authentication setup. We configure SPF, DKIM, and DMARC records correctly to ensure maximum email security and deliverability.",
      features: ["SPF Configuration", "DKIM Setup", "DMARC Policy", "DNS Management", "Record Validation", "Ongoing Monitoring"]
    },
    {
      id: 5,
      title: "Phishing Protection",
      description: "Advanced protection against phishing attacks",
      icon: "Shield",
      keyBenefit: "99.9% phishing attack prevention",
      details: "Multi-layered phishing protection using advanced threat detection, email filtering, and user training. We protect your organization from sophisticated phishing campaigns.",
      features: ["Threat Detection", "Email Filtering", "User Training", "Incident Response", "Security Awareness", "Regular Updates"]
    },
    {
      id: 6,
      title: "Server Management",
      description: "Complete server administration and optimization",
      icon: "Server",
      keyBenefit: "99.99% uptime guarantee",
      details: "Comprehensive server management including monitoring, maintenance, updates, and optimization. We ensure your servers run efficiently and securely 24/7.",
      features: ["Server Monitoring", "Performance Optimization", "Security Updates", "Backup Management", "Disaster Recovery", "24/7 Support"]
    },
    {
      id: 7,
      title: "Expert Consulting",
      description: "Strategic IT planning and infrastructure optimization",
      icon: "Users",
      keyBenefit: "Optimized infrastructure reducing costs by 30%",
      details: "Expert IT consulting services to help you make informed decisions about your infrastructure. We provide strategic planning, cost optimization, and technology roadmaps.",
      features: ["Infrastructure Planning", "Cost Optimization", "Technology Roadmap", "Best Practices", "Security Assessment", "Migration Planning"]
    }
  ],
  
  portfolio: [
    {
      id: 1,
      title: "Enterprise Email Migration",
      description: "Migrated 500+ user email system with zero downtime and 99.9% deliverability rate",
      category: "Email Infrastructure",
      client: "Regional Hospital Network",
      year: "2024",
      technologies: ["Postfix", "DMARC", "DKIM", "SPF", "TLS Encryption"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Network Security Overhaul",
      description: "Implemented comprehensive security for financial firm with zero security incidents",
      category: "Network Security",
      client: "Investment Advisory Firm",
      year: "2024",
      technologies: ["Sophos Firewall", "OpenVPN", "Nagios", "Fail2Ban", "SIEM"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "E-commerce Email Deliverability Fix",
      description: "Improved email deliverability from 65% to 95% inbox placement for high-volume sender",
      category: "Email Deliverability",
      client: "Online Retailer",
      year: "2024",
      technologies: ["Postfix", "DMARC", "DKIM", "SPF", "MTA-STS", "PowerMTA"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "DNS & Authentication Setup",
      description: "Configured complete email authentication infrastructure for healthcare organization",
      category: "DNS & Authentication",
      client: "Healthcare Provider",
      year: "2023",
      technologies: ["BIND", "SPF", "DKIM", "DMARC", "MTA-STS"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Server Management & Optimization",
      description: "Optimized server infrastructure achieving 99.99% uptime for enterprise client",
      category: "Server Management",
      client: "Manufacturing Company",
      year: "2023",
      technologies: ["Postfix", "Dovecot", "HAProxy", "Grafana", "Prometheus"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Phishing Protection Implementation",
      description: "Deployed multi-layered phishing protection reducing attacks by 99.9%",
      category: "Phishing Protection",
      client: "Financial Services",
      year: "2024",
      technologies: ["DMARC", "SpamAssassin", "ClamAV", "Fail2Ban", "Threat Intelligence"],
      image: "/api/placeholder/400/300"
    }
  ],

  homeData: {
    hero: {
      badge: "Trusted by 100+ Businesses",
      title: "Secure Your Email Infrastructure & Network",
      subtitle: "Expert email deliverability and network security services that ensure your communications are protected and your emails reach the inbox—every time.",
      stats: [
        "99.9% Email Deliverability Rate",
        "Zero Security Breaches",
        "24/7 Expert Support"
      ]
    },
    trustIndicators: [
      { number: "100+", label: "Clients Served" },
      { number: "500+", label: "Projects Completed" },
      { number: "99.9%", label: "Uptime Guarantee" },
      { number: "24/7", label: "Support Available" }
    ],
    whyChooseUs: {
      title: "Why Choose RKS Infra?",
      differentiators: [
        {
          title: "Email Deliverability Specialists",
          description: "We don't just set up email servers—we ensure every email lands in the inbox, not spam. Our expertise in SPF, DKIM, DMARC, and ISP relationships is unmatched."
        },
        {
          title: "Enterprise-Grade Security",
          description: "Sophos-certified firewall experts with hands-on experience securing networks for businesses of all sizes. We implement multi-layered security that actually works."
        },
        {
          title: "Proven Track Record",
          description: "100+ successful implementations with measurable results. Our clients see immediate improvements in email deliverability and network security."
        },
        {
          title: "24/7 Support",
          description: "Round-the-clock monitoring and support. When issues arise, we're there—no matter the time or day."
        },
        {
          title: "Transparent Communication",
          description: "No technical jargon, no surprises. We explain everything in plain language and keep you informed every step of the way."
        },
        {
          title: "Cost-Effective Solutions",
          description: "We optimize your infrastructure to reduce costs while improving performance and security. You get enterprise-grade solutions without enterprise prices."
        }
      ]
    },
    process: {
      title: "Our Proven Process",
      steps: [
        {
          step: 1,
          icon: "Search",
          title: "Discovery & Assessment",
          description: "We analyze your current setup, identify issues, and understand your specific needs."
        },
        {
          step: 2,
          icon: "FileText",
          title: "Planning & Strategy",
          description: "We create a detailed implementation plan tailored to your business requirements."
        },
        {
          step: 3,
          icon: "Settings",
          title: "Implementation",
          description: "Our experts configure and deploy your solution with minimal disruption to your operations."
        },
        {
          step: 4,
          icon: "BarChart",
          title: "Monitoring & Optimization",
          description: "We continuously monitor performance and optimize to ensure peak efficiency and security."
        }
      ]
    },
    successMetrics: [
      {
        title: "Email Deliverability",
        before: "65% Inbox Rate",
        after: "98% Inbox Rate",
        description: "Improved email deliverability from 65% to 98% through proper authentication and reputation management."
      },
      {
        title: "Network Security",
        before: "12 Security Incidents/Year",
        after: "0 Security Incidents",
        description: "Eliminated all security incidents through comprehensive firewall configuration and threat monitoring."
      },
      {
        title: "System Uptime",
        before: "95% Uptime",
        after: "99.9% Uptime",
        description: "Increased system reliability from 95% to 99.9% uptime through proactive monitoring and maintenance."
      }
    ],
    technologies: {
      categories: [
        {
          category: "Email Technologies",
          tools: ["Postfix", "Dovecot", "Roundcube", "SPF", "DKIM", "DMARC", "MTA-STS"]
        },
        {
          category: "Security Tools",
          tools: ["Sophos Firewall", "pfSense", "OpenVPN", "Fail2Ban", "ClamAV", "SpamAssassin"]
        },
        {
          category: "Monitoring & Analytics",
          tools: ["Grafana", "Prometheus", "Nagios", "ELK Stack", "Zabbix", "Datadog"]
        },
        {
          category: "Cloud Platforms",
          tools: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode", "Vultr"]
        },
        {
          category: "DNS & Networking",
          tools: ["BIND", "PowerDNS", "Cloudflare", "Route53", "OpenDNS", "pfSense"]
        },
        {
          category: "Backup & Recovery",
          tools: ["Bacula", "Veeam", "Rclone", "Rsync", "Duplicity", "BorgBackup"]
        }
      ]
    },
    industries: [
      {
        name: "Healthcare",
        description: "HIPAA-compliant email and network security solutions for healthcare organizations."
      },
      {
        name: "Finance",
        description: "Bank-grade security for financial institutions handling sensitive transactions."
      },
      {
        name: "E-commerce",
        description: "High-volume email deliverability for marketing campaigns and transactional emails."
      },
      {
        name: "Education",
        description: "Secure email infrastructure for schools and universities with thousands of users."
      },
      {
        name: "Legal",
        description: "Confidential communication solutions for law firms and legal professionals."
      },
      {
        name: "Manufacturing",
        description: "Reliable network infrastructure for manufacturing operations and supply chain communication."
      }
    ],
    supportModels: {
      title: "Flexible Support Models",
      models: [
        {
          type: "Basic Support",
          description: "Essential monitoring and maintenance for small businesses",
          bestFor: "Small businesses with basic email and network needs",
          startingAt: "$299/month"
        },
        {
          type: "Professional Support",
          description: "Comprehensive support with proactive monitoring and optimization",
          bestFor: "Growing businesses requiring reliable infrastructure",
          startingAt: "$799/month"
        },
        {
          type: "Enterprise Support",
          description: "Dedicated support team with 24/7 monitoring and rapid response",
          bestFor: "Large organizations with mission-critical infrastructure",
          startingAt: "Custom Pricing"
        }
      ]
    },
    cta: {
      title: "Ready to Secure Your Infrastructure?",
      description: "Get a free email security audit and discover how we can improve your deliverability and protect your network."
    },
    faq: [
      {
        question: "How long does it take to set up email infrastructure?",
        answer: "Typically 1-2 weeks depending on complexity. We can set up basic configurations in as little as 2-3 days for urgent needs."
      },
      {
        question: "What's included in your email deliverability service?",
        answer: "We handle SPF, DKIM, and DMARC configuration, IP reputation management, list hygiene, bounce management, and ongoing monitoring to ensure your emails reach the inbox."
      },
      {
        question: "Do you provide 24/7 support?",
        answer: "Yes, our Enterprise Support plan includes 24/7 monitoring and support. Professional plans include business hours support with emergency response available."
      },
      {
        question: "Can you help with existing email infrastructure?",
        answer: "Absolutely! We can audit, optimize, and secure your existing email setup. Many clients come to us after experiencing deliverability issues."
      },
      {
        question: "What makes your network security different?",
        answer: "We're Sophos-certified and have hands-on experience with production systems. We don't just configure—we optimize for your specific use case and continuously monitor for threats."
      },
      {
        question: "How do you measure success?",
        answer: "We track key metrics like email deliverability rates, inbox placement, security incidents, system uptime, and response times. You'll receive regular reports showing improvements."
      },
      {
        question: "What industries do you serve?",
        answer: "We work with healthcare, finance, e-commerce, education, legal, manufacturing, and more. Our solutions are tailored to meet industry-specific compliance requirements."
      },
      {
        question: "Can I get a free consultation?",
        answer: "Yes! We offer free email security audits and consultations. Contact us to schedule a call and discuss your specific needs."
      }
    ]
  },

  caseStudies: [
    {
      id: 1,
      title: "Healthcare Email Security Overhaul",
      client: "Regional Hospital Network",
      industry: "Healthcare",
      service: "Email Deliverability",
      year: "2024",
      challenge: "A regional hospital network with 200+ users was experiencing severe email deliverability issues. Critical patient communications were being marked as spam, and HIPAA compliance was at risk. Their existing email infrastructure lacked proper authentication and had poor IP reputation.",
      solution: "We implemented comprehensive SPF, DKIM, and DMARC authentication, migrated to a dedicated IP with proper warm-up procedures, and configured HIPAA-compliant email encryption. We also set up monitoring and alerting systems to ensure ongoing deliverability.",
      results: {
        inboxRate: "98% Inbox Placement",
        deliveryRate: "99.2% Delivery Rate",
        authentication: "100% Auth Pass Rate"
      },
      metrics: [
        { label: "Inbox Placement Rate", value: "98%" },
        { label: "Email Delivery Rate", value: "99.2%" },
        { label: "Authentication Pass Rate", value: "100%" },
        { label: "Spam Complaints", value: "<0.1%" }
      ],
      technologies: ["Postfix", "DMARC", "DKIM", "SPF", "TLS Encryption", "Grafana"],
      testimonial: "RKS Infra transformed our email infrastructure. We went from 60% inbox placement to 98%, and our critical communications now reach recipients reliably. Their expertise in healthcare compliance was invaluable."
    },
    {
      id: 2,
      title: "E-commerce Email Deliverability Fix",
      client: "Online Retailer",
      industry: "E-commerce",
      service: "Email Deliverability",
      year: "2024",
      challenge: "An e-commerce company sending 500K+ emails monthly was seeing only 65% inbox placement. Their transactional and marketing emails were landing in spam, directly impacting revenue. They had no email authentication configured.",
      solution: "We set up proper SPF, DKIM, and DMARC records, implemented dedicated IP warm-up, optimized their sending practices, and configured automated bounce handling. We also established relationships with major ISPs to improve reputation.",
      results: {
        inboxRate: "95% Inbox Placement",
        deliveryRate: "97.8% Delivery Rate"
      },
      metrics: [
        { label: "Inbox Placement Rate", value: "95%" },
        { label: "Email Delivery Rate", value: "97.8%" },
        { label: "Revenue Impact", value: "+$50K/month" },
        { label: "Bounce Rate", value: "<2%" }
      ],
      technologies: ["Postfix", "DMARC", "DKIM", "SPF", "MTA-STS", "PowerMTA"],
      testimonial: "Our email revenue increased by $50K per month after RKS Infra fixed our deliverability. Their understanding of ISP relationships and authentication was exactly what we needed."
    },
    {
      id: 3,
      title: "Financial Firm Network Security",
      client: "Investment Advisory Firm",
      industry: "Finance",
      service: "Network Security",
      year: "2024",
      challenge: "A financial advisory firm needed to secure their network infrastructure to meet regulatory compliance requirements. They had multiple security incidents and lacked proper firewall configuration and monitoring.",
      solution: "We implemented Sophos firewall with advanced threat protection, configured network segmentation, set up VPN for remote access, and implemented 24/7 monitoring with automated threat response.",
      results: {
        securityIncidents: "0 Security Incidents",
        uptime: "99.99% Uptime"
      },
      metrics: [
        { label: "Security Incidents", value: "0" },
        { label: "Network Uptime", value: "99.99%" },
        { label: "Threats Blocked", value: "1,200+/month" },
        { label: "Compliance Status", value: "100% Compliant" }
      ],
      technologies: ["Sophos Firewall", "OpenVPN", "Nagios", "Fail2Ban", "SIEM"],
      testimonial: "RKS Infra secured our network infrastructure and helped us achieve full regulatory compliance. We've had zero security incidents since implementation, and their monitoring caught several potential threats before they became issues."
    }
  ],

  solutions: [
    {
      id: 1,
      title: "Emails Going to Spam",
      problem: "Your legitimate emails are being marked as spam, reducing deliverability and impacting business communications.",
      solution: "We configure proper SPF, DKIM, and DMARC authentication, manage IP reputation, and optimize sending practices to ensure inbox placement.",
      category: "Email Deliverability",
      timeframe: "1-2 weeks",
      steps: [
        "Audit current email authentication setup",
        "Configure SPF, DKIM, and DMARC records",
        "Set up dedicated IP with proper warm-up",
        "Optimize sending practices and list hygiene",
        "Monitor and adjust based on ISP feedback"
      ],
      technologies: ["SPF", "DKIM", "DMARC", "MTA-STS", "Postfix"],
      industries: ["E-commerce", "Marketing", "Healthcare", "Finance"]
    },
    {
      id: 2,
      title: "Network Security Vulnerabilities",
      problem: "Your network is vulnerable to attacks, and you've experienced security incidents or compliance issues.",
      solution: "We implement enterprise-grade firewall configuration, network segmentation, intrusion detection, and continuous monitoring to protect your infrastructure.",
      category: "Network Security",
      timeframe: "2-4 weeks",
      steps: [
        "Security assessment and vulnerability scan",
        "Firewall configuration and rule optimization",
        "Network segmentation implementation",
        "Intrusion detection system setup",
        "24/7 monitoring and threat response"
      ],
      technologies: ["Sophos Firewall", "pfSense", "Fail2Ban", "SIEM", "IDS/IPS"],
      industries: ["Finance", "Healthcare", "Legal", "Manufacturing"]
    },
    {
      id: 3,
      title: "Email Server Performance Issues",
      problem: "Your email server is slow, experiencing downtime, or unable to handle your email volume.",
      solution: "We optimize server configuration, implement proper load balancing, set up monitoring, and ensure high availability for your email infrastructure.",
      category: "Email Infrastructure",
      timeframe: "1-3 weeks",
      steps: [
        "Performance analysis and bottleneck identification",
        "Server configuration optimization",
        "Load balancing and redundancy setup",
        "Monitoring and alerting implementation",
        "Capacity planning and scaling"
      ],
      technologies: ["Postfix", "Dovecot", "HAProxy", "Grafana", "Prometheus"],
      industries: ["E-commerce", "Education", "Healthcare", "Enterprise"]
    },
    {
      id: 4,
      title: "DNS Configuration Problems",
      problem: "DNS misconfigurations are causing email delivery failures, authentication issues, or service outages.",
      solution: "We audit and fix DNS configurations, properly set up email authentication records, and ensure redundancy and performance.",
      category: "DNS & Authentication",
      timeframe: "3-7 days",
      steps: [
        "DNS audit and record validation",
        "Fix misconfigured records",
        "Set up SPF, DKIM, and DMARC records",
        "Implement DNS redundancy",
        "Validate and test all configurations"
      ],
      technologies: ["BIND", "PowerDNS", "Cloudflare", "Route53"],
      industries: ["All Industries"]
    },
    {
      id: 5,
      title: "Phishing Attack Prevention",
      problem: "Your organization is receiving phishing emails or your domain is being used for phishing attacks.",
      solution: "We implement advanced email filtering, SPF/DKIM/DMARC to prevent domain spoofing, user training, and incident response procedures.",
      category: "Phishing Protection",
      timeframe: "1-2 weeks",
      steps: [
        "Implement SPF, DKIM, and DMARC policies",
        "Set up advanced email filtering",
        "Configure threat detection systems",
        "User security awareness training",
        "Incident response plan development"
      ],
      technologies: ["DMARC", "SpamAssassin", "ClamAV", "Fail2Ban"],
      industries: ["Finance", "Healthcare", "Legal", "Enterprise"]
    }
  ],

  processData: {
    overview: {
      description: "Our proven 4-step process ensures your email and network infrastructure is secure, optimized, and delivering results from day one."
    },
    steps: [
      {
        step: 1,
        icon: "Search",
        title: "Discovery & Assessment",
        description: "We start by understanding your current infrastructure, identifying pain points, and assessing your specific needs and goals.",
        duration: "1-3 days",
        timeline: "Initial assessment completed within 1-3 business days",
        communication: "Daily updates via email and scheduled calls",
        activities: [
          "Infrastructure audit and analysis",
          "Security vulnerability assessment",
          "Performance baseline establishment",
          "Requirements gathering",
          "Stakeholder interviews"
        ],
        deliverables: [
          "Comprehensive assessment report",
          "Risk analysis document",
          "Recommended solution architecture",
          "Implementation timeline",
          "Cost estimate"
        ]
      },
      {
        step: 2,
        icon: "FileText",
        title: "Planning & Strategy",
        description: "We create a detailed implementation plan tailored to your business, including architecture design, security policies, and migration strategies.",
        duration: "3-5 days",
        timeline: "Planning phase completed within 3-5 business days",
        communication: "Regular check-ins and document reviews",
        activities: [
          "Solution architecture design",
          "Security policy development",
          "Migration strategy planning",
          "Resource allocation",
          "Timeline finalization"
        ],
        deliverables: [
          "Detailed implementation plan",
          "Architecture diagrams",
          "Security policies document",
          "Migration checklist",
          "Testing strategy"
        ]
      },
      {
        step: 3,
        icon: "Settings",
        title: "Implementation",
        description: "Our experts configure and deploy your solution with minimal disruption, following best practices and security standards.",
        duration: "1-4 weeks",
        timeline: "Implementation varies based on complexity, typically 1-4 weeks",
        communication: "Daily standups and progress reports",
        activities: [
          "Infrastructure configuration",
          "Security implementation",
          "System integration",
          "Testing and validation",
          "Documentation creation"
        ],
        deliverables: [
          "Configured infrastructure",
          "Security configurations",
          "Testing results",
          "User documentation",
          "Handover documentation"
        ]
      },
      {
        step: 4,
        icon: "BarChart",
        title: "Monitoring & Optimization",
        description: "We continuously monitor performance, optimize configurations, and provide ongoing support to ensure peak efficiency and security.",
        duration: "Ongoing",
        timeline: "Continuous monitoring and optimization",
        communication: "Weekly reports and on-demand support",
        activities: [
          "24/7 system monitoring",
          "Performance optimization",
          "Security updates",
          "Regular health checks",
          "Proactive issue resolution"
        ],
        deliverables: [
          "Weekly performance reports",
          "Security status updates",
          "Optimization recommendations",
          "Incident reports",
          "Quarterly reviews"
        ]
      }
    ],
    engagementModels: [
      {
        type: "Project-Based",
        description: "One-time implementation projects for specific infrastructure needs",
        bestFor: "Organizations with defined projects and clear requirements",
        timeline: "1-8 weeks depending on scope",
        pricing: "Fixed project pricing",
        includes: [
          "Complete implementation",
          "Documentation",
          "30-day post-implementation support",
          "Knowledge transfer",
          "Training sessions"
        ]
      },
      {
        type: "Retainer Support",
        description: "Ongoing support and maintenance with dedicated resources",
        bestFor: "Businesses requiring continuous support and optimization",
        timeline: "Monthly retainer",
        pricing: "Starting at $799/month",
        includes: [
          "24/7 monitoring",
          "Proactive maintenance",
          "Security updates",
          "Performance optimization",
          "Unlimited support tickets",
          "Monthly reports"
        ]
      },
      {
        type: "Managed Services",
        description: "Complete infrastructure management with SLA guarantees",
        bestFor: "Organizations wanting to outsource infrastructure management",
        timeline: "Ongoing management",
        pricing: "Custom pricing based on infrastructure",
        includes: [
          "Full infrastructure management",
          "99.9% uptime SLA",
          "Dedicated support team",
          "Proactive optimization",
          "Security management",
          "Quarterly business reviews"
        ]
      }
    ],
    whatToExpect: {
      communication: [
        "Regular status updates via email",
        "Scheduled progress calls",
        "Real-time issue notifications",
        "Transparent project tracking",
        "Quick response to questions"
      ],
      approach: [
        "Best practices and industry standards",
        "Security-first mindset",
        "Minimal disruption to operations",
        "Thorough testing before deployment",
        "Comprehensive documentation"
      ],
      support: [
        "Expert technical team",
        "Proactive problem-solving",
        "Knowledge transfer and training",
        "Ongoing optimization",
        "Long-term partnership"
      ]
    },
    successMetrics: [
      "Email Deliverability Rate",
      "Inbox Placement Rate",
      "System Uptime",
      "Security Incident Count",
      "Response Time",
      "Client Satisfaction"
    ]
  }
};

// Named exports for backward compatibility
export const staticServices = staticData.services;
export const staticPortfolio = staticData.portfolio;
export const staticHomeData = staticData.homeData;
export const staticCaseStudies = staticData.caseStudies;
export const staticSolutions = staticData.solutions;
export const staticProcessData = staticData.processData;
