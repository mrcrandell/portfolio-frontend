<template>
  <header class="entry-masthead" :style="style">
    <div class="featured-img">
      <picture>
        <slot name="picture"></slot>
      </picture>
    </div>
    <div class="entry-header">
      <h1 class="entry-title"><slot name="name"></slot></h1>
      <div v-if="isMetaNotEmpty" class="entry-meta">
        <slot name="meta"></slot>
      </div>
      <div v-if="isCaptionNotEmpty" class="entry-caption">
        <slot name="caption"></slot>
      </div>
      <div class="btn-view-more-container">
        <button
          class="btn btn-outline-white"
          @click="scrollIntoView('skip-to-content')"
        >
          View More
          <svg
            class="i-chevron-bottom"
            viewBox="0 0 32 32"
            width="12"
            height="12"
            fill="none"
            stroke="currentcolor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M30 12 L16 24 2 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default() {
        return ''
      },
    },
    classes: {
      type: String,
      default() {
        return ''
      },
    },
  },
  data() {
    return {
      style: {
        '--color': this.color,
      },
    }
  },
  computed: {
    isMetaNotEmpty() {
      return !!this.$slots.meta
    },
    isCaptionNotEmpty() {
      return !!this.$slots.caption
    },
  },
}
</script>
<style scoped lang="scss">
.entry-masthead .featured-img:before {
  // background: var(--color);
}
.entry-masthead .featured-img:after {
  background: var(--color);
}
</style>
