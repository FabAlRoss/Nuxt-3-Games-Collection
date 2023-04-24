module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/base",
    "plugin:vue/vue3-recommended",
    "airbnb-base",
    "@nuxt/eslint-config",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "prefer-destructuring": "off",
    "no-alert": "off",
    "no-console": "off",
    "consistent-return": "error",
    "max-len": "off",
    "no-restricted-syntax": ["error", "ForInStatement"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-param-reassign": [
      "error",
      {
        ignorePropertyModificationsFor: ["state"],
      },
    ],
  },
};
