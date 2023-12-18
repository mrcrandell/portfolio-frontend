<template>
  <div class="landing-page">
    <div class="content">
      <header class="header">
        <div class="logo-container">
          <AppLogo />
        </div>
      </header>
      <main class="main">
        <h1>Be right back.</h1>
      </main>
    </div>
    <div class="featured-img">
      <picture>
        <source
          type="image/webp"
          media="(max-width: 768px)"
          srcset="
            ~assets/img/section-contact/contact-wallpaper-sm.webp    1x,
            ~assets/img/section-contact/contact-wallpaper-sm@2x.webp 2x
          "
        >
        <source
          type="image/jpg"
          media="(max-width: 768px)"
          srcset="
            ~assets/img/section-contact/contact-wallpaper-sm.jpg    1x,
            ~assets/img/section-contact/contact-wallpaper-sm@2x.jpg 2x
          "
        >
        <source
          type="image/webp"
          media="(min-width: 768px)"
          srcset="
            ~assets/img/section-contact/contact-wallpaper.webp    1x,
            ~assets/img/section-contact/contact-wallpaper@2x.webp 2x
          "
        >
        <source
          type="image/jpg"
          media="(min-width: 768px)"
          srcset="
            ~assets/img/section-contact/contact-wallpaper.jpg    1x,
            ~assets/img/section-contact/contact-wallpaper@2x.jpg 2x
          "
        >
        <img
          loading="lazy"
          class="img-fluid"
          src="~assets/img/section-contact/contact-wallpaper.jpg"
          alt="Contact"
        >
      </picture>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing-page {
  background: $rhino no-repeat center center fixed;
  color: #fff;
  position: relative;
  .content {
    position: relative;
    z-index: 9;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .main {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  h1 {
    width: 100%;
    color: #fff;
    font-size: $h3-font-size;
    line-height: normal;
    text-align: center;
    margin-bottom: 2rem; // 32px
    @media (min-width: $grid-sm) {
      font-size: $h1-font-size;
    }
  }
  header.header {
    // position: fixed;
    width: 100%;
    background: #fff;
    top: 0;
    left: 0;
    z-index: 20;
    border-bottom: 1px solid $sanmarino;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
    @include box_shadow(3);
    padding: 2rem; // 32px
  }
  .logo-container {
    max-width: 800px;
    margin: 0 auto;
  }
  :deep(.logo) {
    // Logo
    max-width: 100%;
    height: auto;
    .color-apple {
      fill: $apple;
    }
    .color-sanmarino {
      fill: $sanmarino;
    }
    .color-none {
      fill: none;
    }
  }
  .featured-img:not(.post-card-featured-img) {
    &:before,
    &:after {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      content: '\020';
      width: 100%;
      height: 100%;
    }
    &:before {
      background: $mostly-black;
      mix-blend-mode: multiply;
      opacity: 0.5;
      z-index: 2;
    }
    &:after {
      background: $sanmarino;
      opacity: 0.5;
      z-index: 3;
      mix-blend-mode: hard-light;
    }
    img {
      height: auto;
      left: 50%;
      max-width: 1000%;
      min-height: 100%;
      min-width: 100vw;
      position: absolute;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: auto;
      z-index: 1;
      height: 100%;
      left: 0;
      object-fit: cover;
      top: 0;
      transform: none;
      width: 100%;
    }
    &:before,
    &:after {
      opacity: 0.6;
    }
    img {
      min-width: 0;
      filter: blur(4px);
      -webkit-filter: blur(4px);
    }
  }
}
</style>