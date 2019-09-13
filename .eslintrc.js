
module.exports = {
  root: true,
  "extends": "eslint-config-egg",
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "script",
    "ecmaFeatures": {
    }
  },
  "env": {
    "node": true,
    "es6": true
  },
  globals: {
    Integer: true,
    // var2: true,
  },
}
