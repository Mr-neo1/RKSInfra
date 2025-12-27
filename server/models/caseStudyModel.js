// Case Studies data model - Real success stories
const caseStudies = [
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

const getAllCaseStudies = () => {
  return caseStudies;
};

const getCaseStudyById = (id) => {
  return caseStudies.find(cs => cs.id === parseInt(id));
};

const getCaseStudiesByIndustry = (industry) => {
  return caseStudies.filter(cs => cs.industry === industry);
};

const getCaseStudiesByService = (service) => {
  return caseStudies.filter(cs => cs.service === service);
};

const getIndustries = () => {
  return [...new Set(caseStudies.map(cs => cs.industry))];
};

const getServices = () => {
  return [...new Set(caseStudies.map(cs => cs.service))];
};

module.exports = {
  getAllCaseStudies,
  getCaseStudyById,
  getCaseStudiesByIndustry,
  getCaseStudiesByService,
  getIndustries,
  getServices
};


