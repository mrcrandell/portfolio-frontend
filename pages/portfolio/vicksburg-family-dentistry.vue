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
        <!--<a href="https://www.vicksburgfamilydentistry.com" target="_blank"
          >View Website</a
        >-->
      </template>
    </masthead>
    <div id="skip-to-content"></div>
    <div class="portfolio-item-grid">
      <p>
        In 2013, the original version of the Vicksburg Family Dentistry website
        was a multipage WordPress blog with a rigid design created for desktop
        screens with mobile design as an afterthought.
      </p>
      <p>
        After watching how the client utilized the website and discussing their
        needs in further depth, I went back to the drawing board. The result: a
        single page website with the essential information presented in a clean
        and friendly manner.
      </p>
      <div>
        <img
          srcset="
            /img/portfolio/vicksburg-family-dentistry/browser-homepage@2x.png 2x
          "
          src="/img/portfolio/vicksburg-family-dentistry/browser-homepage.png"
          alt="Homepage of the Vicksburg Family Dentistry Website"
          class="img-responsive center-block portfolio-img portfolio-browser"
        />
      </div>
      <div>
        <img
          srcset="/img/portfolio/vicksburg-family-dentistry/demo@2x.jpg 2x"
          src="/img/portfolio/vicksburg-family-dentistry/demo.jpg"
          alt="The Vicksburg Family Dentistry Website on Devices"
          class="img-responsive center-block portfolio-img"
        />
      </div>
      <div>
        <h2>Color Scheme</h2>
        <div class="color-swatches">
          <color-swatch
            v-for="colorSwatch in colorPalette"
            :key="colorSwatch.name"
            :color-swatch="colorSwatch"
          ></color-swatch>
        </div>
      </div>
      <div>
        <h2>Typography</h2>
        <img
          src="/img/portfolio/vicksburg-family-dentistry/typography.jpg"
          class="portfolio-img"
          alt="Vicksburg Family Dentistry Website Typography"
        />
      </div>
      <div class="portfolio-item-grid">
        <div>
          <img
            srcset="
              /img/portfolio/vicksburg-family-dentistry/mobile-homepage@2x.png 2x
            "
            src="/img/portfolio/vicksburg-family-dentistry/mobile-homepage.png"
            class="img-responsive center-block portfolio-img portfolio-browser"
            alt="Vicksburg Family Dentistry Website Homepage on Mobile"
          />
        </div>
        <div>
          <img
            srcset="
              /img/portfolio/vicksburg-family-dentistry/mobile-features@2x.png 2x
            "
            src="/img/portfolio/vicksburg-family-dentistry/mobile-features.png"
            class="img-responsive center-block portfolio-img portfolio-browser"
            alt="Vicksburg Family Dentistry Website Features Section on Mobile"
          />
        </div>
      </div>
      <div>
        <img
          srcset="
            /img/portfolio/vicksburg-family-dentistry/browser-contact@2x.png 2x
          "
          src="/img/portfolio/vicksburg-family-dentistry/vicksburg-family-dentistry-browser-contact.png"
          class="img-responsive center-block portfolio-img portfolio-browser"
          alt="Vicksburg Family Dentistry Website Contact Section"
        />
      </div>
    </div>
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
