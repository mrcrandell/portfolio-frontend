// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ...
    '@pinia/nuxt',
    'nuxt-proxy',
    ['@nuxtjs/eslint-module', {
      fix: true
    }],
    'nuxt-gtag'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use 'sass:math';
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_mixins.scss";
          `
        }
      }
    }
  },
  devtools: { enabled: true },
  telemetry: false,
  runtimeConfig: {
    invisibleRecaptchaSecretkey: process.env.INVISIBLE_RECAPTCHA_SECRETKEY,
    mailgunDomain: process.env.MAILGUN_DOMAIN,
    mailgunApi: process.env.MAILGUN_API,
    public: {
      invisibleRecaptchaSiteKey: process.env.INVISIBLE_RECAPTCHA_SITEKEY,
    }
  },
  gtag: {
    id: process.env.GOOGLE_ANALYTICS_ID
  }
})
