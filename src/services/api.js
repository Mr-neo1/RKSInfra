// Simplified API - no axios needed for static site
// All APIs return promises that reject to trigger fallback to static data

export const homeAPI = {
  getHomeData: async () => {
    // This will fail and trigger static data fallback
    return Promise.reject(new Error('API not available, using static data'));
  }
};

export const servicesAPI = {
  getAllServices: async () => {
    // This will fail and trigger static data fallback
    return Promise.reject(new Error('API not available, using static data'));
  },
  getServiceById: async (id) => {
    // This will fail and trigger static data fallback
    return Promise.reject(new Error('API not available, using static data'));
  }
};

export const processAPI = {
  getProcessDetails: async () => {
    // This will fail and trigger static data fallback
    return Promise.reject(new Error('API not available, using static data'));
  }
};

export const solutionsAPI = {
  getAllSolutions: async () => {
    // This will fail and trigger static data fallback
    return Promise.reject(new Error('API not available, using static data'));
  }
};

export const caseStudiesAPI = {
  getAllCaseStudies: async () => {
    // This will fail and trigger static data fallback
    return Promise.reject(new Error('API not available, using static data'));
  }
};

export const portfolioAPI = {
  getAllPortfolioItems: async () => {
    // This will fail and trigger static data fallback
    return Promise.reject(new Error('API not available, using static data'));
  }
};

export const contactAPI = {
  submitContact: async (data) => {
    // This will be handled by Web3Forms in ContactPage
    return Promise.resolve({ success: true });
  }
};

// Named export for default to satisfy ESLint
const apiDefault = {};
export default apiDefault;