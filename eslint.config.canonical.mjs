import tsParser from '@typescript-eslint/parser'
import tailwindCanonicalClasses from 'eslint-plugin-tailwind-canonical-classes'

export default [
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      'tailwind-canonical-classes': tailwindCanonicalClasses
    },
    rules: {
      'tailwind-canonical-classes/tailwind-canonical-classes': [
        'warn',
        { cssPath: './src/app/[locale]/globals.css' }
      ]
    }
  }
]
