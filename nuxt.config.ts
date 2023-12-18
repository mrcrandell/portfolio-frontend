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
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_mixins.scss";
          `
        }
      }
    }
  },
  devtools: { enabled: true },
  
  telemetry: false
})
