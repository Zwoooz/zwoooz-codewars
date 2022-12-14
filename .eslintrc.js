module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    radix: 0,
    'no-unused-vars': 0,
    'keyword-spacing': ['error', { after: false }],
    'max-len': ['error', { ignoreComments: true, code: 100 }],
  },
};
