<template>
  <div class="featured-img" :class="{ 'post-card-featured-img': isPostCard }">
    <picture v-if="featuredImg.src">
      <source media="(min-width: 992px)" :srcset="featuredImg.full.src" />
      <source media="(min-width: 576px)" :srcset="featuredImg.large.src" />
      <img
        loading="lazy"
        class="img-fluid"
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
    isPostCard: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
