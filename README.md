#expandenv

*Environment Variable injection for your strings*

##Installation

`npm install --save expandenv`

##Usage

Expandenv takes a string and injects the environment variable for each `$KEYWORD` it finds. If none is available it will leave the `$KEYWORD`. It also allows you to pass in a hash that will override the `process.env` variables you specify.

```javascript
var expandenv = require('expandenv')
  , dir = expandenv("$PWD") // "/the/current/directory/"
  , example = expandenv("Hi $PARENT how are you?", {PARENT: 'Mom'}) // "Hi Mom how are you?"
```

___

Made with ⚡️ by [@taterbase](https://twitter.com/taterbase)
