module.exports = {
  rules: {
    // NOT allow use `var` keyword
    'no-var': 'error',

    // NOT allow un-used vars
    'no-unused-vars': 'error',

    // ALLOW function hoisting
    'no-use-before-define': ['error', 'nofunc'],

    // ALLOW single line, like this: `if (foo) foo++`
    //... but NOT allow `if (foo)\n doSomething()`, etc..
    curly: ['error', 'multi-line'],

    // ALLOW [1, 2, 3] but NOT [1, 2, 3,]
    // multiline array/object elements MUST include trailing comma, ex:
    // {
    //   a: 1,
    //   b: 2,
    // }
    'comma-dangle': ['error', 'always-multiline'],

    // USE single quote, NOT double quotes.
    quotes: ['error', 'single'],

    // USE `\n` (newline) when use `else` keyword. which means NOT allow `} else {`
    'brace-style': ['error', 'stroustrup'],

    //////////////////////////////////////
    // no semicolon style, refer to ASI //
    //////////////////////////////////////

    // allow you written `;[].forEach.apply` but not allow `jQuery('body').remove();`
    semi: ['error', 'never'],

    'no-extra-semi': 'error',

    'semi-spacing': ['error', { before: false, after: true }],
  }
}
