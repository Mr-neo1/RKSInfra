import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_CONFIG } from '../config/constants';

/**
 * SEO Component
 * Manages meta tags and page title for better SEO
 * Note: For full SEO with Open Graph tags, consider using react-helmet-async
 */
const SEO = ({ 
  title, 
  description, 
  keywords, 
  noindex = false 
}) => {
  const location = useLocation();
  
  const pageTitle = title 
    ? `${title} | ${SEO_CONFIG.defaultTitle.split(' - ')[0]}`
    : SEO_CONFIG.defaultTitle;
  
  const pageDescription = description || SEO_CONFIG.defaultDescription;
  const pageKeywords = keywords || SEO_CONFIG.defaultKeywords;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageDescription);

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', pageKeywords);

    // Update robots meta tag if noindex
    if (noindex) {
      let metaRobots = document.querySelector('meta[name="robots"]');
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.setAttribute('name', 'robots');
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute('content', 'noindex, nofollow');
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SEO_CONFIG.siteUrl}${location.pathname}`);
  }, [pageTitle, pageDescription, pageKeywords, noindex, location.pathname]);

  return null; // This component doesn't render anything
};

export default SEO;

