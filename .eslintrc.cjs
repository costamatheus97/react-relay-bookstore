module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'relay'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:relay/recommended',
    'prettier',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/naming-convention': ['error', { 'selector': 'variableLike', 'format': ['camelCase'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'relay/graphql-syntax': 'error',
    'relay/compat-uses-vars': 'warn',
    'relay/graphql-naming': 'error',
    'relay/generated-flow-types': 'warn',
    'relay/no-future-added-value': 'warn',
    'relay/unused-fields': 'warn',
    'relay/react-required-fetcher': 'error',
    'relay/operation-name-singular': 'warn',
    'relay/operation-name': 'warn'
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};