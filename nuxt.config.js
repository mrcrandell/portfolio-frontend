require('dotenv').config()
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'portfolio-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: { color: '#4cb848' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  serverMiddleware: ['~/middleware/seo'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/mixins' },
    { src: '~/plugins/mutatePost' },
    { src: '~/plugins/prism' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/style-resources'],

  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  
  styleResources: {
    scss: [
      'assets/scss/_variables.scss',
      'assets/scss/_mixins.scss'
    ]
  }
}
