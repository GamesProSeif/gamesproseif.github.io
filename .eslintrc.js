module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    semi: ["error", "always"],
    indent: ["error", "tab"],
    "vue/html-indent": ["error", "tab", {
      attribute: 2
    }],
    "no-tabs": 0,
  }
}