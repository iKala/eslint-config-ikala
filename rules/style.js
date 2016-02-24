module.exports = {
  rules: {
    // NOT allow use `var` keyword
    'no-var': 2,

    // NOT allow un-used vars
    'no-unused-vars': 1,

    // ALLOW function hoisting
    'no-use-before-define': [2, 'nofunc'],

    // ALLOW single line, like this: `if (foo) foo++`
    //... but NOT allow `if (foo)\n doSomething()`, etc..
    curly: [2, 'multi-line'],

    // ALLOW you make [1, 2, 3,] or [a:1, b:1, c:1,] to written IN multiline.
    'comma-dangle': 0,

    // USE single quote, NOT double quotes.
    quotes: [2, 'single'],

    // USE `\n` (newline) when use `else` keyword. which means NOT allow `} else {`
    'brace-style': [2, "stroustrup"]

    //////////////////////////////////////
    // no semicolon style, refer to ASI //
    //////////////////////////////////////

    // allow you written `;[].forEach.apply` but not allow `jQuery('body').remove();`
    semi: [2, 'never'],

    'no-extra-semi': 2,

    'semi-spacing': [2, { before: false, after: true }],
  }
}
