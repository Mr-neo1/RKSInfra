/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Security-focused color palette
        'deep-blue': '#0f172a',
        'security-blue': '#2563eb',
        'trust-green': '#10b981',
        'alert-orange': '#f59e0b',
        'cyan-highlight': '#06b6d4',
        'shield-purple': '#8b5cf6',
        // Text colors
        'light-gray': '#e2e8f0',
        'medium-gray': '#94a3b8',
        'dark-gray': '#475569',
      },
    },
  },
  plugins: [],
}

