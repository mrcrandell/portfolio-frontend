<template>
  <section id="intro" class="page">
    <div class="featured-img">
      <picture>
        <source
          type="image/jpg"
          media="(max-width: 768px)"
          srcset="
            ~assets/img/section-intro/intro-wallpaper-sm.jpg    1x,
            ~assets/img/section-intro/intro-wallpaper-sm@2x.jpg 2x
          "
        />
        <source
          type="image/webp"
          media="(max-width: 768px)"
          srcset="~assets/img/section-intro/intro-wallpaper.webp"
        />
        <source
          type="image/webp"
          media="(min-width: 768px)"
          srcset="~assets/img/section-intro/intro-wallpaper.webp"
        />
        <img
          loading="lazy"
          class="img-fluid"
          src="~assets/img/section-intro/intro-wallpaper.jpg"
          srcset="
            ~assets/img/section-intro/intro-wallpaper.jpg    1x,
            ~assets/img/section-intro/intro-wallpaper@2x.jpg 2x
          "
          alt="Anybody can make a website"
        />
      </picture>
    </div>
    <div class="content">
      <h1 class="slogan heading">
        Anybody can make a website, <br />let me make you a better one!
      </h1>
      <div class="button-holder">
        <button
          class="btn btn-outline-white"
          @click="scrollIntoView('portfolio')"
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
            <path d="M30 12 L16 24 2 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
#intro .featured-img:not(.post-card-featured-img) img {
  min-width: 0;
}
</style>