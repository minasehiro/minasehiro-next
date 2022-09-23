module.exports = {
  "plugins": ["prettier"],
  "extends": ["plugin:react/recommended"],
  "rules": {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2020
  },
  "env": {
    "browser": true,
    "jest": true
  }
};
