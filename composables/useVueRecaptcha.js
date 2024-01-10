import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3';
import { useNuxtApp } from '#app';
import { useRuntimeConfig } from "#imports";

export const useVueRecaptcha = async () => {
  const { vueApp } = useNuxtApp();
  const runtimeConfig = useRuntimeConfig();
  vueApp.use(VueReCaptcha, {
    siteKey: runtimeConfig.public.invisibleRecaptchaSiteKey,
    loaderOptions: {
      autoHideBadge: true,
    },
  });
  const { recaptchaLoaded } = useReCaptcha();
  await recaptchaLoaded();
  const { executeRecaptcha } = useReCaptcha();
  return await executeRecaptcha('contact');
};