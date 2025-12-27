// Process model - Detailed how we work information
const getProcessDetails = () => {
  return {
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
};

module.exports = {
  getProcessDetails
};


