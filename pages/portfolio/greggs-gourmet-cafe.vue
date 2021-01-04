<template>
  <div class="project-container">
    <masthead :color="colorPalette[0].hex">
      <template #picture>
        <source
          type="image/webp"
          srcset="/img/portfolio/greggs-gourmet-cafe/featured-img.webp"
        />
        <source
          type="image/jpeg"
          srcset="/img/portfolio/greggs-gourmet-cafe/featured-img.jpg"
        />
        <img
          loading="lazy"
          class="img-fluid"
          src="/img/portfolio/greggs-gourmet-cafe/featured-img.jpg"
          srcset="
            /img/portfolio/greggs-gourmet-cafe/featured-img.jpg    1x,
            /img/portfolio/greggs-gourmet-cafe/featured-img@2x.jpg 2x
          "
          alt="Gregg's Gourmet Cafe"
        />
      </template>
      <template #name>Gregg's Gourmet Cafe</template>
      <template #meta>
        <div>Clarkston, MI</div>
      </template>
      <template #caption>
        Gregg's Gourmet Cafe in Clarkston, MI has the best breadsticks in the
        area. For a few years, I was lucky enough to work with them to create a
        website that was simple for user to navigate while keeping it easy for
        the client to update.
      </template>
    </masthead>
    <p>
      The website for Gregg's Gourmet Cafe was built using WordPress with a
      theme built using the
      <a href="https://roots.io/sage/" target="_blank">Sage</a> theme framework.
      I also created a custom plugin to assist with user navigation.
    </p>
    <color-swatch
      v-for="colorSwatch in colorPalette"
      :key="colorSwatch.name"
      :color-swatch="colorSwatch"
    ></color-swatch>
  </div>
</template>
<script>
import ColorSwatch from '~/components/portfolio/ColorSwatch.vue'
import Masthead from '~/components/portfolio/Masthead.vue'
export default {
  components: {
    ColorSwatch,
    Masthead,
  },
  data() {
    return {
      colorPalette: [
        {
          name: 'Crimson',
          hex: '#ED2D38',
        },
        {
          name: 'Greenpea',
          hex: '#245E36',
        },
        {
          name: 'Space Cadet',
          hex: '#173753',
        },
        {
          name: 'Success',
          hex: '#28A745',
        },
        {
          name: 'Info',
          hex: '#6DAEDB',
        },
        {
          name: 'Warning',
          hex: '#FFC914',
        },
        {
          name: 'Danger',
          hex: '#ED2D38',
        },
        {
          name: 'Light',
          hex: '#F8F9FA',
        },
        {
          name: 'Dark',
          hex: '#343A40',
        },
      ],
    }
  },
}
</script>
