/**
 * API Client Utility
 * 
 * Centralized API client for easy backend integration in the future.
 * Currently uses static data fallback, but can be easily switched to real API.
 */

import { API_CONFIG } from '../config/constants';

/**
 * Base API client function
 * Handles API calls with error handling and timeout
 */
const apiClient = async (endpoint, options = {}) => {
  const { useBackendAPI, baseURL, timeout } = API_CONFIG;

  // If backend API is disabled, reject to trigger static data fallback
  if (!useBackendAPI) {
    return Promise.reject(new Error('Backend API not enabled, using static data'));
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(`${baseURL}${endpoint}`, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return { data, status: response.status };
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      throw new Error('Request timeout');
    }
    
    throw error;
  }
};

/**
 * GET request helper
 */
export const get = (endpoint, options = {}) => {
  return apiClient(endpoint, {
    ...options,
    method: 'GET',
  });
};

/**
 * POST request helper
 */
export const post = (endpoint, data, options = {}) => {
  return apiClient(endpoint, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
};

/**
 * PUT request helper
 */
export const put = (endpoint, data, options = {}) => {
  return apiClient(endpoint, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

/**
 * DELETE request helper
 */
export const del = (endpoint, options = {}) => {
  return apiClient(endpoint, {
    ...options,
    method: 'DELETE',
  });
};

export default apiClient;

