// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ...
    '@pinia/nuxt',
    'nuxt-proxy',
    ['@nuxtjs/eslint-module', {
      fix: true
    }]
  ],
  devtools: { enabled: true },
  
  telemetry: false
})
