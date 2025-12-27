// Service data model - Email Security & Network Infrastructure Specialists
const services = [
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

const getAllServices = () => {
  return services;
};

const getServiceById = (id) => {
  return services.find(service => service.id === parseInt(id));
};

module.exports = {
  getAllServices,
  getServiceById
};
