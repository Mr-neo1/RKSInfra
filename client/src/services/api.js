import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.error || error.message || 'An error occurred';
    return Promise.reject(new Error(message));
  }
);

// API methods
export const homeAPI = {
  getHomeData: () => api.get('/home'),
};

export const servicesAPI = {
  getAllServices: () => api.get('/services'),
  getServiceById: (id) => api.get(`/services/${id}`),
};

export const contactAPI = {
  submitContact: (data) => api.post('/contact', data),
};

export const portfolioAPI = {
  getAllPortfolioItems: () => api.get('/portfolio'),
  getPortfolioItemById: (id) => api.get(`/portfolio/${id}`),
};

export const solutionsAPI = {
  getAllSolutions: () => api.get('/solutions'),
  getSolutionById: (id) => api.get(`/solutions/${id}`),
  getSolutionsByCategory: (category) => api.get(`/solutions/category/${category}`),
};

export const caseStudiesAPI = {
  getAllCaseStudies: () => api.get('/case-studies'),
  getCaseStudyById: (id) => api.get(`/case-studies/${id}`),
  getCaseStudiesByIndustry: (industry) => api.get(`/case-studies/industry/${industry}`),
  getCaseStudiesByService: (service) => api.get(`/case-studies/service/${service}`),
};

export const processAPI = {
  getProcessDetails: () => api.get('/process'),
};

export default api;

