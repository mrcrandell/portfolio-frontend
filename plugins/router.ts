import { defineNuxtPlugin } from '#app';
export default defineNuxtPlugin(({ $router }) => {
  $router.options.scrollBehavior = (to: { hash: any }) => {
    if (to.hash) {
      return {
        el: to.hash,
        top: 30,
        behavior: 'smooth'
      }
    }
  }
});