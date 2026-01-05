module.exports = {
  extends: ['next/core-web-vitals'],
  ignorePatterns: [
    'src/**/*',
    '**/src/**/*',
    'src/pages/ContactPage.js',
    'node_modules/**',
    '.next/**',
    'out/**',
  ],
  rules: {
    'react/no-unescaped-entities': 'off',
    // Disable no-undef for old CRA files in src/
    'no-undef': 'off',
  },
  overrides: [
    {
      files: ['src/**/*'],
      rules: {
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
}
