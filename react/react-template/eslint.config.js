// eslint.config.js
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import babelParser from '@babel/eslint-parser' // Import the new parser

export default [
  {
    languageOptions: {
      parser: babelParser, // Use the new Babel parser here
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        React: 'writable',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
      'prettier/prettier': 'error', // Integrate Prettier
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'no-console': 'warn', // Example rule, adjust as needed
      // Add other specific rules here
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'prettier/prettier': 'error',
      ...prettierConfig.rules, // Include Prettier's rules
    },
  },
]
