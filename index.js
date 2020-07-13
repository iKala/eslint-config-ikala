module.exports = {
  env: {
    node: true,
    browser: true,
    es2017: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        './rules/style.js',
        './rules/typescriptStyle.js',
      ],
    },
    {
      files: ['*.js', '*.jsx'],
      extends: [
        './rules/style.js',
      ],
    },
  ],
}
