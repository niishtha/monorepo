module.exports = {
  parser: "babel-eslint",
  extends: "eslint:recommended",
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react/recommended"],
  rules: {
    "arrow-parens": ["error", "always"],
    "no-confusing-arrow": ["off"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0, maxBOF: 0 }],
    "no-underscore-dangle": ["off"],
    "object-curly-newline": ["error", { consistent: true }],
    "prefer-promise-reject-errors": ["off"],
    "import/no-named-default": ["off"],
    "import/prefer-default-export": ["off"],
    "jsx-a11y/anchor-is-valid": ["off"],
    "jsx-a11y/click-events-have-key-events": ["off"],
    "jsx-a11y/label-has-for": [
      "error",
      { required: { every: ["id"] }, allowChildren: true }
    ],
    "jsx-a11y/no-noninteractive-element-interactions": ["off"],
    "jsx-a11y/no-static-element-interactions": ["off"],
    "react/forbid-prop-types": ["error", { forbid: ["any"] }],
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }],
    "react/require-default-props": ["off"],
    "no-alert": ["warn"]
  }
};
