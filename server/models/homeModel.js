// Home page data model - Email Security & Network Infrastructure Specialists
const getHomeData = () => {
  return {
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
};

module.exports = {
  getHomeData
};
