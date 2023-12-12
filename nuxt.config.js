require('dotenv').config()
export default {
  debug: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'portfolio-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Matt Crandel is a seasoned front end web developer with over ten years experience working with everything from small businesses to large corporations.' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes:"57x57", href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes:"60x60", href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes:"72x72", href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes:"76x76", href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes:"114x114", href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes:"120x120", href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes:"144x144", href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes:"152x152", href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes:"180x180", href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes:"192x192", href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes:"96x96", href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes:"32x32", href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes:"16x16", href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'font', type: 'font/woff', href: './fonts/aileron-light-webfont.woff', crossorigin: 'anonymous' },
      { rel: 'preload', as: 'font', type: 'font/woff', href: './fonts/aileron-regular-webfont.woff', crossorigin: 'anonymous' },
    ],
  },

  loading: { color: '#4cb848' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  serverMiddleware: [
    // { path: "/blog-api", handler: "~/server-middleware/blog-api.js" }, 
    '~/middleware/seo',
    '~/server-middleware/api.js'
    // { path: '/api', handler: '~/server-middleware/api.js' },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/mixins' },
    { src: '~/plugins/mutatePost' },
    { src: '~/plugins/prism' },
    { src: '@/plugins/gtag' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/proxy',
    '@nuxtjs/recaptcha',
    // '@nuxtjs/gtm',
  ],

  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  
  styleResources: {
    scss: [
      'assets/scss/_variables.scss',
      'assets/scss/_mixins.scss'
    ]
  },

  // Proxy
  proxy: {
  // Proxies /graphql to http://localhost:3001/graphql
  // We tell the graphql client to connect to host:sameport/graphql to not get cors protection
  // Then we proxy it locally to the real graphql server that is located on the ports below.
    '/blog-api': { 
      target: process.env.BLOG_API_URL, 
      ws: true,
      changeOrigin: true,
      pathRewrite: {'^/blog-api' : '/'}
    },
    /* '/api/': { 
      target: 'https://www.crandelldesign.com',
      pathRewrite: {'^/api' : ''},
    }, */
  },

  // ReCaptcha
  recaptcha: {
    /* reCAPTCHA options */
    hideBadge: true,
    siteKey: process.env.INVISIBLE_RECAPTCHA_SITEKEY,
    version: 3
  },

  // Analytics
  /* gtm: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  } */
  telemetry: false
}
