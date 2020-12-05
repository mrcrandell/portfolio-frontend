<template>
  <nuxt-link class="portfolio-thumbnail" :to="`/portfolio/${project.slug}`">
    <div class="client-img">
      <img
        :srcset="`${displayImg2x} 2x`"
        :src="project.displayImg"
        :alt="project.name"
        class="img-fluid main-img"
      />
      <img
        :srcset="`${hoverImg2x} 2x`"
        :src="project.hoverImg"
        :alt="project.name"
        class="img-fluid hover-img"
      />
    </div>
    <div class="info">
      <div class="client-name">{{ project.name }}</div>
      <div v-if="project.city" class="client-location">
        {{ project.city }}, {{ project.state }}
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    displayImg2x() {
      return this.project.displayImg.replace('.jpg', '@2x.jpg')
    },
    hoverImg2x() {
      return this.project.hoverImg.replace('.jpg', '@2x.jpg')
    },
  },
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';
.portfolio-thumbnail {
  border: 1px solid $sanmarino;
  @include box-shadow(1);
  @include transition(box-shadow 0.3s ease-in-out);
  display: flex;
  flex-direction: column;
}
</style>
