module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  plugins: ['@babel'],
};
