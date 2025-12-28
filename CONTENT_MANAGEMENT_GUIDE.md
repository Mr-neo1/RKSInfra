# Content Management Guide

This guide explains how to easily update content across the website without touching code.

## 📝 Quick Content Updates

### 1. Site Information (`src/config/constants.js`)

Update basic site information:

```javascript
export const SITE_CONFIG = {
  name: 'RKS Infra',
  email: 'contact@rksinfra.com',
  phone: '+91 [Your Number]',
  location: 'Ludhiana, Punjab, India',
  // ... update other fields
};
```

### 2. Static Content (`src/data/staticData.js`)

All page content is stored in `src/data/staticData.js`. This is the main file for content updates.

#### Update Homepage Content

```javascript
homeData: {
  hero: {
    badge: "Trusted by 100+ Businesses",
    title: "Your New Title",
    subtitle: "Your new subtitle",
    // ...
  },
  // ... other sections
}
```

#### Update Services

```javascript
services: [
  {
    id: 1,
    title: "Your Service Title",
    description: "Service description",
    icon: "Mail", // Options: Shield, Mail, Server, Globe, ShieldCheck, Monitor, Users
    keyBenefit: "Key benefit text",
    details: "Detailed description",
    features: ["Feature 1", "Feature 2", ...]
  },
  // ... add more services
]
```

#### Update Case Studies

```javascript
caseStudies: [
  {
    id: 1,
    title: "Case Study Title",
    client: "Client Name",
    industry: "Industry",
    service: "Service Type",
    year: "2024",
    challenge: "Challenge description",
    solution: "Solution description",
    results: {
      inboxRate: "98% Inbox Placement",
      // ...
    },
    // ...
  }
]
```

#### Update Solutions

```javascript
solutions: [
  {
    id: 1,
    title: "Solution Title",
    problem: "Problem description",
    solution: "Solution description",
    category: "Email Deliverability",
    timeframe: "1-2 weeks",
    steps: ["Step 1", "Step 2", ...],
    technologies: ["Tech 1", "Tech 2", ...],
    industries: ["Industry 1", "Industry 2", ...]
  }
]
```

### 3. Navigation (`src/config/constants.js`)

Update navigation items:

```javascript
NAVIGATION: {
  main: [
    { name: 'Services', path: '/services', hasDropdown: true },
    // Add or modify navigation items
  ],
  services: [
    { name: 'Service Name', path: '/services#service-id' },
    // Update service dropdown items
  ],
}
```

### 4. Social Media Links (`src/config/constants.js`)

```javascript
SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  whatsapp: 'https://wa.me/yournumber',
  email: 'mailto:your@email.com',
}
```

## 🎨 Styling & Colors

Colors are defined in `tailwind.config.js`:

```javascript
colors: {
  'deep-blue': '#0f172a',
  'security-blue': '#2563eb',
  'trust-green': '#10b981',
  // ... update colors here
}
```

## 🔧 Advanced: Adding New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.js`
3. Add navigation link in `src/config/constants.js`
4. Add page data in `src/data/staticData.js` if needed

## 📊 SEO Updates

Update SEO settings in `src/config/constants.js`:

```javascript
SEO_CONFIG = {
  defaultTitle: 'Your Page Title',
  defaultDescription: 'Your meta description',
  defaultKeywords: 'keyword1, keyword2, keyword3',
  // ...
}
```

## 🔌 Enabling Backend API

When you're ready to connect a backend:

1. Update `src/config/constants.js`:
   ```javascript
   API_CONFIG = {
     useBackendAPI: true,
     baseURL: 'https://your-api.com/api',
   }
   ```

2. Update API functions in `src/services/api.js` to use real endpoints

3. Set environment variables in `.env`:
   ```
   REACT_APP_USE_BACKEND_API=true
   REACT_APP_API_URL=https://your-api.com/api
   ```

## 📝 Best Practices

1. **Always backup** `staticData.js` before making major changes
2. **Test locally** after content updates
3. **Keep content consistent** across pages
4. **Use proper formatting** for better readability
5. **Update related sections** when changing service names or categories

## 🚀 Deployment Checklist

Before deploying:

- [ ] Update all contact information
- [ ] Verify all links work
- [ ] Check SEO meta tags
- [ ] Test contact form
- [ ] Verify social media links
- [ ] Check mobile responsiveness
- [ ] Test all pages load correctly

