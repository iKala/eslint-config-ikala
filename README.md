## Usage

LIVEhouse javascript use babel to compile ES2015 / ES2016 and extend airbnb's coding style. LIVEhouse use [eslint](http://eslint.org/docs/rules) as linter, so you need to install following packages:

- eslint
- babel-eslint
- eslint-config-airbnb
- eslint-plugin-react
- frontend-es-coding-style

#### Install

```sh
# sh
npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-react frontend-es-coding-style --save-dev
```

if you have any question about rule, please visit [rules](http://eslint.org/docs/rules) for detail.

#### Config

Create a file called `.eslintrc.yml` and add code as below to get it work:

```yaml
# .eslintrc.yml
extends:
  - './node_modules/frontend-es-coding-style/backend.yml'
```

#### Install IDE/editor plugin

You should install plugin for your IDE or editor.

please visit http://eslint.org/docs/user-guide/integrations.html for more detail.
