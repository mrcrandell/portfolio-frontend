<template>
  <section
    id="intro"
    class="page"
  >
    <BaseBackground>
      <picture>
        <source
          type="image/webp"
          media="(max-width: 767px)"
          srcset="
            ~assets/img/section-intro/intro-wallpaper-sm.webp    1x,
            ~assets/img/section-intro/intro-wallpaper-sm@2x.webp 2x
          "
        >
        <source
          type="image/jpg"
          media="(max-width: 767px)"
          srcset="
            ~assets/img/section-intro/intro-wallpaper-sm.jpg    1x,
            ~assets/img/section-intro/intro-wallpaper-sm@2x.jpg 2x
          "
        >
        <source
          type="image/webp"
          media="(min-width: 768px)"
          srcset="
            ~assets/img/section-intro/intro-wallpaper.webp    1x,
            ~assets/img/section-intro/intro-wallpaper@2x.webp 2x
          "
        >
        <source
          type="image/jpg"
          edia="(min-width: 768px)"
          srcset="
            ~assets/img/section-intro/intro-wallpaper.jpg    1x,
            ~assets/img/section-intro/intro-wallpaper@2x.jpg 2x
          "
        >
        <img
          loading="lazy"
          class="img-fluid"
          src="~assets/img/section-intro/intro-wallpaper.jpg"
          alt="Anybody can make a website"
        >
      </picture>
    </BaseBackground>
    <div class="content">
      <h1
        v-if="isFromCrandellDesign"
        class="slogan heading"
      >
        Crandell Design might be gone, <br>but I'm still making websites.
      </h1>
      <h1
        v-else
        class="slogan heading"
      >
        Anybody can make a website, <br>let me make you a better one!
      </h1>
      <div class="button-holder">
        <nuxtLink
          :to="{ path: '/', hash: '#portfolio' }"
          class="btn btn-outline-white"
        >
          See For Yourself
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
        </nuxtLink>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isFromCrandellDesign: false,
    }
  },
  mounted() {
    if (this.$route.query.utm_source === 'crandelldesign.com') {
      this.isFromCrandellDesign = true
    }
  },
}
</script>
<style lang="scss" scoped>
#intro {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  background: #303c71;
  min-height: 100vh;
  display: flex;
  align-items: center;
  .content {
    position: relative;
    z-index: 9;
    text-align: center;
  }
  h1.slogan {
    color: #fff;
    font-size: $h3-font-size;
    line-height: normal;
    //margin-top: 100px;
    margin-bottom: 2rem; // 32px
    @media (min-width: $grid-sm) {
      font-size: $h1-font-size;
    }
    br {
      display: none;
      @media (min-width: $grid-sm) {
        display: block;
      }
    }
  }
}
</style>