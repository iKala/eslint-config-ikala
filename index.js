module.exports = {
  env: {
    node: true,
    browser: true,
    es2017: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    './rules/style.js',
    './rules/typescriptStyle.js'
  ]
}
