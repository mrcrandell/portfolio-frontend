<template>
  <header class="header" :class="{ 'is-hidden': !isHeaderShown }">
    <div class="container">
      <div class="logo-container">
        <nuxt-link to="/">
          <Logo />
        </nuxt-link>
      </div>
      <LayoutNav />
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isHeaderShown: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (
        Math.abs(window.pageYOffset - this.lastScrollPosition) <
        this.scrollOffset
      ) {
        return
      }
      this.isHeaderShown = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
  },
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';

header.header {
  position: fixed;
  width: 100%;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 20;
  border-bottom: 1px solid $sanmarino;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  @include box_shadow(3);
  > .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 15px;
    @media (min-width: $grid-sm) {
      padding: 0 30px;
    }
    @media (min-width: $grid-md) {
      //grid-template-columns: 50% 50%;
      max-width: $max-width;
      margin: 0 auto;
    }
    .logo-container {
      min-width: 250px;
      max-width: 400px;
      max-height: 75px;
      padding: 15px 0;
      margin: 0 auto;
      @media (min-width: $grid-lg) {
        margin: 0;
      }
      a {
        display: block;
      }
    }
    ::v-deep .navbar {
      width: 100%;
      @media (min-width: $grid-lg) {
        width: auto;
        flex: 1 0 auto;
        max-width: 500px;
      }
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        list-style: none;
        height: 100%;
        align-items: center;
        a,
        button {
          @extend a;
          border: 0;
          background: transparent;
          display: block;
          padding: 0.5rem 0.0625rem;
          @media (min-width: $grid-md) {
            font-size: 1.25rem; // 20px
          }
        }
      }
    }
  }
  &.is-hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }
}
</style>
