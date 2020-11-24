<template>
  <article>
    <nuxt-link :to="post.link">
      <h1 v-html="post.title"></h1>
    </nuxt-link>
  </article>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
