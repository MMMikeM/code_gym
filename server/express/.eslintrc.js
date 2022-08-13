module.exports = {
  env: {
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  root: true,
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "arrow-body-style": ["error", "as-needed"],
    // superceded by @typescript-eslint/no-unused-vars
    "no-unused-vars": [0],
  },
}
