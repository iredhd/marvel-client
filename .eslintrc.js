module.exports = {
  "env": {
    "browser": true,
    "es2020": true,
    "node": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-use-before-define": ["error", { "functions": false, "classes": false, "variables": false }],
    "prefer-default-export": "off",
    "import/no-cycle": "off",
    "eslint-disable react/default-props-match-prop-types": "off",
    "import/prefer-default-export": "off",
    "max-len": "off",
    "no-underscore-dangle": "off",
    "react/jsx-props-no-spreading": "off",
    "no-param-reassign": "off"
  }
};
