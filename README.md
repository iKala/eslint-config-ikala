## Usage

LIVEhouse noders uses babel as compiler for ES2015+, for this intent LIVEhouse noders extends eslint:recommended and airbnb coding style. Also LIVEhouse uses [eslint](http://eslint.org/docs/rules) as linter, so you need to install following packages:

- babel-eslint
- eslint
- eslint-config-airbnb
- eslint-config-livehouse

#### Install

```sh
# sh
npm install babel-eslint eslint eslint-config-airbnb --save-dev
npm install git+ssh://git@gitlab.corp.ikala.tv:30022/npm/eslint-config-livehouse.git#v0.2.x --save-dev
```

Please visit [rules](http://eslint.org/docs/rules) for more detail.

#### Config

Create a file called `.eslintrc.yml` and add code as below to get it work:

```yaml
# .eslintrc.yml
extends:
  - 'livehouse/browser' # for browser uses
  - 'livehouse/node' # for node uses
  # - 'livehouse/tests' # for tests uses, NOT implement yet
  - 'livehouse' # whatever
```

#### Install IDE/editor plugin

You should install plugin for your IDE or editor.

Please visit http://eslint.org/docs/user-guide/integrations.html for more detail.
