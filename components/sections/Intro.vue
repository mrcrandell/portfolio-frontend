<template>
  <section id="intro" class="page">
    <div class="featured-img">
      <picture>
        <img
          loading="lazy"
          class="img-fluid"
          src="~assets/img/intro-wallpaper.jpg"
          srcset="
            ~assets/img/intro-wallpaper.jpg    1x,
            ~assets/img/intro-wallpaper@2x.jpg 2x
          "
          alt="Anybody can make a website"
        />
      </picture>
    </div>
    <div class="content">
      <h1 class="slogan heading">
        Anybody can make a website,<br />let me make you a better one!
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
