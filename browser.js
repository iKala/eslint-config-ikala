module.exports = {
  env: {
    browser: true
  },
  rules: {
  },
  extends: [
    'eslint:recommended',
    'airbnb/base',
    'airbnb/rules/react',
    'airbnb/rules/react-a11y',
    'livehouse/rules/babel',
    'livehouse/rules/es2015',
    'livehouse/rules/style',
  ]
}
