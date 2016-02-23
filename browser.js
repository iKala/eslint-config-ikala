module.exports = {
  env: {
    browser: true
  },
  rules: {
  },
  extends: [
    'eslint:recommended',
    'airbnb/base',
    'livehouse/rules/babel',
    'livehouse/rules/es2015',
    'livehouse/rules/style',
  ]
}
