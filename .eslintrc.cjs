module.exports = {
  extends: ['next/core-web-vitals'],
  ignorePatterns: [
    'src/**/*',
    '**/src/**/*',
    'src/pages/ContactPage.js',
    'node_modules/**',
    '.next/**',
    'out/**',
    'build/**',
  ],
  rules: {
    'react/no-unescaped-entities': 'off',
    // Disable no-undef globally to prevent errors in old CRA files
    'no-undef': 'off',
    'no-unused-vars': 'off',
  },
  overrides: [
    {
      files: ['src/**/*'],
      rules: {
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
}

