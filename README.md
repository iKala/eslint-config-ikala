## Prerequisite

- eslint(^6.0.0)
- eslint-config-livehouse(^3.0.0)
- eslint-plugin-react(^7.14.0)
- @typescript-eslint/eslint-plugin(^2.0.0)

#### Install

```sh
npm install eslint@"^6.0.0" eslint-config-livehouse@"^3.0.0" \
eslint-plugin-react@"^7.14.0"  @typescript-eslint/eslint-plugin@"^2.0.0" --save-dev
```

Please visit [rules](http://eslint.org/docs/rules) for more detail.

#### Config

Create a file named `.eslintrc.json` and add code as follows:

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "livehouse"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  }
}
```

#### Install IDE/editor plugin

You should install plugin for your IDE or editor.

Please visit http://eslint.org/docs/user-guide/integrations.html for more detail.
