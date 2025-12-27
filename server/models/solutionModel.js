// Solutions data model - Detailed solutions for specific problems
const solutions = [
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

const getSolutionsByCategory = (category) => {
  return solutions.filter(s => s.category === category);
};

const getAllSolutions = () => {
  return solutions;
};

const getSolutionById = (id) => {
  return solutions.find(s => s.id === parseInt(id));
};

const getCategories = () => {
  return [...new Set(solutions.map(s => s.category))];
};

module.exports = {
  getAllSolutions,
  getSolutionById,
  getSolutionsByCategory,
  getCategories
};


