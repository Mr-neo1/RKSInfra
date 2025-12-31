const fs = require('fs');
const path = require('path');

// Static content for each page
const pages = {
  '/': {
    title: 'RKS Infra - Email Security & Network Infrastructure Solutions',
    description: 'Professional email security, network infrastructure, and IT solutions. Specializing in SPF, DKIM, DMARC implementation, firewall configuration, and server management.',
    content: `
      <h1>Email Security & Network Infrastructure Solutions</h1>
      <p>Professional email security, network infrastructure, and IT solutions. Specializing in SPF, DKIM, DMARC implementation, firewall configuration, and server management.</p>
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Email Deliverability Solutions</li>
          <li>Network Security Implementation</li>
          <li>Server Management & Configuration</li>
          <li>DNS & Authentication Setup</li>
        </ul>
      </section>
    `
  },
  '/services': {
    title: 'Our Services - RKS Infra',
    description: 'Comprehensive email security and network infrastructure services including SPF, DKIM, DMARC setup, firewall configuration, and server management.',
    content: `
      <h1>Our Services</h1>
      <p>Comprehensive email security and network infrastructure services.</p>
      <div>
        <h2>Email Security Services</h2>
        <p>SPF, DKIM, DMARC implementation and email deliverability optimization.</p>
        <h2>Network Infrastructure</h2>
        <p>Firewall configuration, server setup, and network security implementation.</p>
      </div>
    `
  },
  '/contact': {
    title: 'Contact Us - RKS Infra',
    description: 'Get in touch with RKS Infra for professional email security and network infrastructure solutions. Contact us for consultation and support.',
    content: `
      <h1>Contact Us</h1>
      <p>Get in touch with RKS Infra for professional email security and network infrastructure solutions.</p>
      <div>
        <p>Email: contact@rksinfra.com</p>
        <p>Phone: +91-7065219519</p>
      </div>
    `
  }
};

function generateStaticHTML(route, pageData) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${pageData.title}</title>
  <meta name="description" content="${pageData.description}" />
  <meta name="robots" content="index, follow" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="${pageData.title}" />
  <meta property="og:description" content="${pageData.description}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://rksinfra.com${route}" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${pageData.title}" />
  <meta name="twitter:description" content="${pageData.description}" />
  
  <link rel="canonical" href="https://rksinfra.com${route}" />
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; }
    h1 { color: #2563eb; }
    .loading { text-align: center; margin: 50px 0; }
  </style>
</head>
<body>
  <noscript>
    <div>
      ${pageData.content}
    </div>
  </noscript>
  
  <!-- SEO-friendly content that's immediately visible -->
  <div id="seo-content" style="display: block;">
    ${pageData.content}
  </div>
  
  <div id="root"></div>
  
  <script>
    // Hide SEO content once React loads
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        const seoContent = document.getElementById('seo-content');
        if (seoContent && document.getElementById('root').innerHTML.trim()) {
          seoContent.style.display = 'none';
        }
      }, 100);
    });
  </script>
</body>
</html>`;
}

// Generate static HTML files
function generateStaticFiles() {
  const buildDir = path.join(__dirname, '..', 'build');
  
  Object.entries(pages).forEach(([route, pageData]) => {
    const html = generateStaticHTML(route, pageData);
    const filePath = route === '/' 
      ? path.join(buildDir, 'index.html')
      : path.join(buildDir, route.slice(1), 'index.html');
    
    // Create directory if it doesn't exist
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✅ Generated: ${filePath}`);
  });
  
  console.log('🚀 Static HTML files generated successfully!');
}

if (require.main === module) {
  generateStaticFiles();
}

module.exports = { generateStaticFiles };