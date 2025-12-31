import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEO_CONFIG } from '../config/constants';

/**
 * Enhanced SEO Component with react-helmet-async
 * Provides comprehensive meta tags, Open Graph, Twitter Cards, and Structured Data
 */
const SEO = ({ 
  title, 
  description, 
  keywords,
  image,
  type = 'website',
  noindex = false,
  structuredData,
  article = null
}) => {
  const location = useLocation();
  
  const pageTitle = title 
    ? `${title} | ${SEO_CONFIG.defaultTitle.split(' - ')[0]}`
    : SEO_CONFIG.defaultTitle;
  
  const pageDescription = description || SEO_CONFIG.defaultDescription;
  const pageKeywords = keywords || SEO_CONFIG.defaultKeywords;
  const pageImage = image || `${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImage}`;
  const canonicalUrl = `${SEO_CONFIG.siteUrl}${location.pathname}`;

  // Default structured data (Organization schema)
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RKS Infra",
    "url": SEO_CONFIG.siteUrl,
    "logo": `${SEO_CONFIG.siteUrl}/logo512.png`,
    "description": SEO_CONFIG.defaultDescription,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7065219519",
      "contactType": "Customer Service",
      "email": "contact@rksinfra.com"
    },
    "sameAs": [
      SEO_CONFIG.twitterHandle ? `https://twitter.com/${SEO_CONFIG.twitterHandle.replace('@', '')}` : null,
      "https://linkedin.com/company/rksinfra"
    ].filter(Boolean)
  };

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SEO_CONFIG.siteUrl
      },
      ...(location.pathname !== '/' ? [{
        "@type": "ListItem",
        "position": 2,
        "name": title || "Page",
        "item": canonicalUrl
      }] : [])
    ]
  };

  const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="author" content="RKS Infra" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content="RKS Infra" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      {SEO_CONFIG.twitterHandle && (
        <meta name="twitter:creator" content={SEO_CONFIG.twitterHandle} />
      )}

      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>

      {/* Structured Data - Breadcrumb */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>

      {/* Custom Structured Data */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((data, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(data)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )
      )}
    </Helmet>
  );
};

export default SEO;
