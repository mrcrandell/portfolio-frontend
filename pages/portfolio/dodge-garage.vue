<template>
  <div class="project-container">
    <masthead :color="'#DC0000'">
      <template #picture>
        <source
          type="image/webp"
          srcset="/img/portfolio/dodge-garage/featured-img.webp"
        />
        <source
          type="image/jpeg"
          srcset="/img/portfolio/dodge-garage/featured-img.jpg"
        />
        <img
          loading="lazy"
          class="img-fluid"
          src="/img/portfolio/dodge-garage/featured-img.jpg"
          srcset="
            /img/portfolio/dodge-garage/featured-img.jpg   1x,
            /img/portfoliododge-garage/featured-img@2x.jpg 2x
          "
          alt="Dodge Garage"
        />
      </template>
      <template #name>Dodge Garage</template>
      <!--<template #meta>
        <a href="https://www.dodgegarage.com" target="_blank">View Website</a>
      </template>-->
      <template #caption>
        In 2018, while working at the JRT agency, my team and I launched an
        enthusiast platform for Dodge.
      </template>
    </masthead>
    <div class="portfolio-content">
      <p>Hi</p>
    </div>
  </div>
</template>
<script>
import Masthead from '~/components/portfolio/Masthead.vue'
export default {
  components: {
    Masthead,
  },
  data() {
    return {}
  },
  head: {
    title: 'Dodge Garage | Matt Crandell',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'In 2018, while working at the JRT agency, my team and I launched an enthusiast platform for Dodge.',
      },
    ],
  },
}
</script>
