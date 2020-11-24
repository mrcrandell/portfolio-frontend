<template>
  <div class="featured-img">
    <picture v-if="featuredImg.src">
      <source media="(min-width: 992px)" :srcset="featuredImg.full.src" />
      <source media="(min-width: 576px)" :srcset="featuredImg.large.src" />
      <img
        loading="lazy"
        class="img-responsive"
        :src="featuredImg.medium.src"
        :alt="featuredImg.alt"
      />
    </picture>
  </div>
</template>
<script>
export default {
  props: {
    featuredImg: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
