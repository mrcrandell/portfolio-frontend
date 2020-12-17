<template>
  <header class="entry-masthead" :style="style">
    <div class="featured-img">
      <picture>
        <slot name="picture"></slot>
      </picture>
    </div>
    <div class="entry-header">
      <h1 class="entry-title"><slot name="name"></slot></h1>
      <div class="entry-meta"><slot name="meta"></slot></div>
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
  },
  data() {
    return {
      style: {
        '--color': this.color,
      },
    }
  },
}
</script>
<style scoped lang="scss">
.entry-masthead .featured-img:before {
  background: var(--color);
}
.entry-masthead .featured-img:after {
  background: var(--color);
}
</style>
