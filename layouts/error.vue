<template>
  <div class="error-page">
    <header class="page-header">
      <h1 v-if="error.statusCode === 404">404: Page not found</h1>
      <h1 v-else>An error occurred</h1>
    </header>
    <div>
      <p><img src="/img/whatd-you-do-tommy-boy.gif" alt="What'd You Do?" /></p>
      <p v-if="error.statusCode === 404">
        I'm sorry, but I couldn't find the page you were looking for. Please try
        one of the links below:
      </p>
      <p v-else>
        Whoa, so something went wrong. PLease try one of the links below:
      </p>
      <LayoutNav />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  // layout: 'error' // you can set a custom layout for the error page
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';
.error-page {
  padding: ($nav-height + 3rem) 2rem 0 2rem;
}
p {
  text-align: center;
}
</style>
