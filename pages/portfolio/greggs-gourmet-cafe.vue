<script setup>
const colorPalette = ref([
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
]);
definePageMeta({
  title: 'Gregg\'s Gourmet Cafe | Matt Crandell',
  description: 'Website for Gregg\'s Gourmet Cafe built by Matt Crandell using Wordpress.'
});
</script>
<template>
  <div class="project-container">
    <PortfolioMasthead :color="colorPalette[0].hex">
      <template #picture>
        <source
          type="image/webp"
          srcset="/img/portfolio/greggs-gourmet-cafe/featured-img.webp"
        >
        <source
          type="image/jpeg"
          srcset="/img/portfolio/greggs-gourmet-cafe/featured-img.jpg"
        >
        <img
          loading="lazy"
          class="img-fluid"
          src="/img/portfolio/greggs-gourmet-cafe/featured-img.jpg"
          srcset="
            /img/portfolio/greggs-gourmet-cafe/featured-img.jpg    1x,
            /img/portfolio/greggs-gourmet-cafe/featured-img@2x.jpg 2x
          "
          alt="Gregg's Gourmet Cafe"
        >
      </template>
      <template #name>
        Gregg's Gourmet Cafe
      </template>
      <template #meta>
        <div>Clarkston, MI</div>
      </template>
      <template #caption>
        Gregg's Gourmet Cafe in Clarkston, MI had the best breadsticks in the
        area while they were open. For a few years, I was lucky enough to work with them to create a
        website that was simple for user to navigate while keeping it easy for
        the client to update.
      </template>
    </PortfolioMasthead>
    <div id="skip-to-content" />
    <div class="portfolio-item-grid">
      <p>
        The website for Gregg's Gourmet Cafe was built using WordPress with a
        theme built using the
        <a
          href="https://roots.io/sage/"
          target="_blank"
        >Sage</a> theme
        framework. I also created a custom plugin to assist with user
        navigation.
      </p>
      <div>
        <img
          srcset="/img/portfolio/greggs-gourmet-cafe/demo@2x.jpg 2x"
          src="/img/portfolio/greggs-gourmet-cafe/demo.jpg"
          class="portfolio-img"
          alt="Gregg's Gourmet Cafe demo"
        >
      </div>
      <div>
        <h2>Techinical Features</h2>
        <h3>Custom WordPress Theme</h3>
        <p>
          Sage is a productivity-driven WordPress starter theme built with
          Laravel. The theme for for this website was then built upon that. This
          allowed me a great starting point to develop the design of the site
          with ease ultilizing tools like Sass.
        </p>
        <p>
          <a
            href="https://github.com/crandelldesign/greggsgourmetcafe"
            class="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >See the Source Code</a>
        </p>
        <h3>Custome WordPress Plugin</h3>
        <p>
          At least according to Sage, site outside of the theme should to be
          kept in separate plugins. I created a breadcrumbs plugin to help with
          user navigation within the menu pages. I then created a plugin that
          automatically creates a list of child pages for whatever page it is
          used on (removing the need to keep things up to date by hand).
        </p>
        <p>
          <a
            href="https://github.com/crandelldesign/greggsgourmetcafe-plugin"
            class="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >See the Source Code</a>
        </p>
      </div>
      <div>
        <h2>Color Scheme</h2>
        <ColorSwatches>
          <ColorSwatch
            v-for="colorSwatch in colorPalette"
            :key="colorSwatch.name"
            :color-swatch="colorSwatch"
          />
        </ColorSwatches>
      </div>
      <div>
        <h2>Typography</h2>
        <img
          src="/img/portfolio/greggs-gourmet-cafe/typography.jpg"
          class="portfolio-img"
          alt="Gregg's Gourmet Cafe Website Typography"
        >
      </div>
    </div>
  </div>
</template>
