module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [ '@nuxtjs', 'plugin:nuxt/recommended', 'prettier', 'prettier/vue', 'plugin:vue/essential', 'eslint:recommended', ],
  plugins: ['prettier'],
  // add your custom rules here
  ignorePatterns: ["assets/vendor/**", "static/**", "node_modules", ".nuxt", "dist"],
  rules: {
    'vue/no-v-html': 'off',
  },
}
