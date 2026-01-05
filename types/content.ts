export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  keyBenefit: string;
  details: string;
  features: string[];
  slug?: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  service: string;
  year: string;
  challenge: string;
  solution: string;
  results: {
    inboxRate?: string;
    deliveryRate?: string;
    authentication?: string;
    securityIncidents?: string;
    uptime?: string;
  };
  metrics: Array<{ label: string; value: string }>;
  technologies: string[];
  testimonial: string;
  slug?: string;
}

export interface HomeData {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    stats: string[];
  };
  trustIndicators: Array<{ number: string; label: string }>;
  whyChooseUs: {
    title: string;
    differentiators: Array<{ title: string; description: string }>;
  };
  process: {
    title: string;
    steps: Array<{
      step: number;
      icon: string;
      title: string;
      description: string;
    }>;
  };
  successMetrics: Array<{
    title: string;
    before: string;
    after: string;
    description: string;
  }>;
  technologies: {
    categories: Array<{ category: string; tools: string[] }>;
  };
  industries: Array<{ name: string; description: string }>;
  supportModels: {
    title: string;
    models: Array<{
      type: string;
      description: string;
      bestFor: string;
      startingAt: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
  };
  faq: Array<{ question: string; answer: string }>;
}

export interface Solution {
  id: number;
  title: string;
  problem: string;
  solution: string;
  category: string;
  timeframe: string;
  steps: string[];
  technologies: string[];
  industries: string[];
}

