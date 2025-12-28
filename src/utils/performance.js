/**
 * Performance Utilities
 * Optimizations for faster loading and better performance
 */

/**
 * Preload critical resources
 */
export const preloadResources = () => {
  // Preload fonts if using custom fonts
  // Example:
  // const link = document.createElement('link');
  // link.rel = 'preload';
  // link.as = 'font';
  // link.type = 'font/woff2';
  // link.crossOrigin = 'anonymous';
  // link.href = '/fonts/custom-font.woff2';
  // document.head.appendChild(link);
};

/**
 * Lazy load images with Intersection Observer
 */
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

/**
 * Prefetch next page for faster navigation
 */
export const prefetchPage = (path) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = path;
      document.head.appendChild(link);
    });
  }
};

/**
 * Initialize performance optimizations
 */
export const initPerformanceOptimizations = () => {
  // Preload critical resources
  preloadResources();
  
  // Lazy load images
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lazyLoadImages);
  } else {
    lazyLoadImages();
  }
};

