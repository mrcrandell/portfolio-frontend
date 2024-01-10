<script setup>
const slots = useSlots();
const props = defineProps({
  color: {
    type: String,
    default: '',
  },
  classes: {
    type: String,
    default: '',
  },
});
const style = computed(() => {
  return '--color:' + props.color;
});
const isMetaNotEmpty = computed(() => {
  return !!slots.meta;
});
const isCaptionNotEmpty = computed(() => {
  return !!slots.caption;
});

function scrollIntoView(destination) {
  document.getElementById(destination).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
</script>

<template>
  <header
    class="entry-masthead"
    :style="style"
  >
    <BaseBackground>
      <picture>
        <slot name="picture" />
      </picture>
    </BaseBackground>
    <div class="entry-header">
      <h1 class="entry-title">
        <slot name="name" />
      </h1>
      <div
        v-if="isMetaNotEmpty"
        class="entry-meta"
      >
        <slot name="meta" />
      </div>
      <div
        v-if="isCaptionNotEmpty"
        class="entry-caption"
      >
        <slot name="caption" />
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
            <path d="M30 12 L16 24 2 12" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
<style scoped lang="scss">
.entry-masthead .featured-img:before {
  // background: var(--color);
}
.entry-masthead :deep(.base-background:after) {
  background: var(--color);
}
</style>
