<script setup>
const colorPalette = ref([
  {
    name: 'Black',
    hex: '#010101',
  },
  {
    name: 'Chambray',
    hex: '#3A5087',
  },
  {
    name: 'Gold',
    hex: '#AA8B3C',
  },
  {
    name: 'Dallas',
    hex: '#725D2A',
  },
  {
    name: 'Laser',
    hex: '#C9AE6B',
  },
  {
    name: 'Blue',
    hex: '#0022D2',
  },
]);
definePageMeta({
  title: 'McRiver Raid | Matt Crandell',
  description: 'Website for the McRiver Raid annual camping event was built by Matt Crandell using Angular.'
});
</script>
<template>
  <div class="project-container">
    <PortfolioMasthead :color="'#AA8B3C'">
      <template #picture>
        <source
          type="image/webp"
          srcset="
            /img/portfolio/mcriver-raid/featured-img.webp    1x,
            /img/portfolio/mcriver-raid/featured-img@2x.webp 2x
          "
        >
        <source
          type="image/jpeg"
          srcset="
            /img/portfolio/mcriver-raid/featured-img.jpg    1x,
            /img/portfolio/mcriver-raid/featured-img@2x.jpg 2x
          "
        >
        <img
          loading="lazy"
          class="img-fluid"
          src="/img/portfolio/mcriver-raid/featured-img.jpg"
          alt="McRiver Raid"
        >
      </template>
      <template #name>
        McRiver Raid
      </template>
      <!--<template #meta>
        <a href="https://www.dodgegarage.com" target="_blank">View Website</a>
      </template>-->
      <template #caption>
        The website for the McRiver Raid annual camping event allowed for users
        to sign up, purchase merchandise and pay online.
      </template>
    </PortfolioMasthead>
    <div id="skip-to-content" />
    <div class="portfolio-item-grid">
      <p>
        An annual camping event I attended required the organizers to reach out
        person to person to get orders and collect money. They contacted me to
        come up with a better option. An easy to use process to sign up for the
        event was created to operate in a similar fashion to how an online store
        checkout operates.
      </p>
      <div class="portfolio-item-grid">
        <figure class="figure">
          <img
            class="figure-img portfolio-img portfolio-browser"
            srcset="
              /img/portfolio/mcriver-raid/mobile-order.png    1x,
              /img/portfolio/mcriver-raid/mobile-order@2x.png 2x
            "
            src="/img/portfolio/mcriver-raid/mobile-order.png"
            alt="Order Form"
          >
          <figcaption class="figure-caption">
            Order Form
          </figcaption>
        </figure>
        <figure class="figure">
          <img
            class="figure-img portfolio-img portfolio-browser"
            srcset="
              /img/portfolio/mcriver-raid/mobile-order-dropdown.png    1x,
              /img/portfolio/mcriver-raid/mobile-order-dropdown@2x.png 2x
            "
            src="/img/portfolio/mcriver-raid/mobile-order-dropdown.png"
            alt="Order Form with Dropdown Expanded"
          >
          <figcaption class="figure-caption">
            Order Form with Dropdown Expanded
          </figcaption>
        </figure>
      </div>
      <div class="portfolio-item-grid">
        <figure class="figure">
          <img
            class="figure-img portfolio-img portfolio-browser"
            srcset="
              /img/portfolio/mcriver-raid/mobile-order-login.png    1x,
              /img/portfolio/mcriver-raid/mobile-order-login@2x.png 2x
            "
            src="/img/portfolio/mcriver-raid/mobile-order-login.png"
            alt="Order Summary - Login"
          >
          <figcaption class="figure-caption">
            Order Summary - Login
          </figcaption>
        </figure>
        <figure class="figure">
          <img
            class="figure-img portfolio-img portfolio-browser"
            srcset="
              /img/portfolio/mcriver-raid/mobile-order-credit-card.png    1x,
              /img/portfolio/mcriver-raid/mobile-order-credit-card@2x.png 2x
            "
            src="/img/portfolio/mcriver-raid/mobile-order-credit-card.png"
            alt="Order Summary - Credit Card"
          >
          <figcaption class="figure-caption">
            Order Summary - Credit Card
          </figcaption>
        </figure>
      </div>
      <div>
        <h2>Technical Features</h2>
        <ul>
          <li>Angular frontend</li>
          <li>API and admin built using Laravel (PHP)</li>
          <li>Login and order retrieval functionality</li>
          <li>Email notifications to users and administrators after sign up</li>
        </ul>
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
      <div class="full-width">
        <h2>Admin</h2>
        <figure class="figure">
          <picture>
            <source
              type="image/webp"
              srcset="
                /img/portfolio/mcriver-raid/browser-admin.webp    1x,
                /img/portfolio/mcriver-raid/browser-admin@2x.webp 2x
              "
            >
            <source
              type="image/png"
              srcset="
                /img/portfolio/mcriver-raid/browser-admin.png    1x,
                /img/portfolio/mcriver-raid/browser-admin@2x.png 2x
              "
            >
            <img
              class="figure-img portfolio-img portfolio-browser"
              src="/img/portfolio/mcriver-raid/browser-admin.png"
              alt="Admin Order View"
            >
          </picture>
          <figcaption class="figure-caption">
            Admin Order View
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>
