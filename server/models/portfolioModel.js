// Portfolio data model - Email Security & Network Infrastructure Focus
const portfolioItems = [
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

const getAllPortfolioItems = () => {
  return portfolioItems;
};

const getPortfolioItemById = (id) => {
  return portfolioItems.find(item => item.id === parseInt(id));
};

module.exports = {
  getAllPortfolioItems,
  getPortfolioItemById
};

