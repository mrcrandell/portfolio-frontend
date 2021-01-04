<template>
  <div class="project-container">
    <masthead :color="colorPalette[0].hex">
      <template #picture>
        <source
          type="image/webp"
          srcset="/img/portfolio/vicksburg-family-dentistry/featured-img.webp"
        />
        <source
          type="image/jpeg"
          srcset="/img/portfolio/vicksburg-family-dentistry/featured-img.jpg"
        />
        <img
          loading="lazy"
          class="img-fluid"
          src="/img/portfolio/vicksburg-family-dentistry/featured-img.jpg"
          srcset="
            /img/portfolio/vicksburg-family-dentistry/featured-img.jpg    1x,
            /img/portfolio/vicksburg-family-dentistry/featured-img@2x.jpg 2x
          "
          alt="Vicksburg Family Dentistry"
        />
      </template>
      <template #name>Vicksburg Family Dentistry</template>
      <template #meta>
        <div>Vicksburg, MI</div>
        <a href="https://www.vicksburgfamilydentistry.com" target="_blank"
          >View Website</a
        >
      </template>
    </masthead>
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
          name: 'Deep Cerulean',
          hex: '#006DB0',
        },
        {
          name: 'Emporor',
          hex: '#555555',
        },
        {
          name: 'Success',
          hex: '#28A745',
        },
        {
          name: 'Cerulean / Info',
          hex: '#0AB1C7',
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
          hex: '#FFFFFF',
        },
        {
          name: 'Swamp / Dark',
          hex: '#000E16',
        },
      ],
    }
  },
  head: {
    title: 'Vicksburg Family Dentistry | Matt Crandell',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Website for Vicksburg Family Dentistry built by Matt Crandell using Vue.js.',
      },
    ],
  },
}
</script>
