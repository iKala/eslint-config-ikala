module.exports = {
  // You should run$ `npm install eslint babel-eslint --save-dev` first with this property.
  parser: 'babel-eslint',

  // override when use babel-eslint
  rules: {
    // make error message if you call some value or function when it is not defined in scope yet.
    'no-undef': 2
  }
}
