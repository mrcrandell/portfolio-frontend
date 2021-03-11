<template>
  <div class="project-container">
    <masthead :color="'#AA8B3C'">
      <template #picture>
        <!-- <source
          type="image/webp"
          srcset="/img/portfolio/dodge-garage/featured-img.webp"
        />
        <source
          type="image/jpeg"
          srcset="/img/portfolio/dodge-garage/featured-img.jpg"
        /> -->
        <img
          loading="lazy"
          class="img-fluid"
          src="https://source.unsplash.com/1920x1080/?corgi"
          srcset="
            https://source.unsplash.com/1920x1080/?corgi 1x,
            https://source.unsplash.com/1920x1080/?corgi 2x
          "
          alt="McRiver Raid"
        />
      </template>
      <template #name>McRiver Raid</template>
      <!--<template #meta>
        <a href="https://www.dodgegarage.com" target="_blank">View Website</a>
      </template>-->
      <template #caption>
        The website for the McRiver Raid annual camping event allowed for users
        to sign up, purchase merchandise and pay online.
      </template>
    </masthead>
    <div id="skip-to-content"></div>
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
            src="https://source.unsplash.com/1000x1751/?corgi"
            alt="Order Form"
          />
          <figcaption class="figure-caption">Order Form</figcaption>
        </figure>
        <figure class="figure">
          <img
            class="figure-img portfolio-img portfolio-browser"
            src="https://source.unsplash.com/1000x1751/?corgi"
            alt="Order Form with Dropdown Expanded"
          />
          <figcaption class="figure-caption">
            Order Form with Dropdown Expanded
          </figcaption>
        </figure>
      </div>
      <div class="portfolio-item-grid">
        <figure class="figure">
          <img
            class="figure-img portfolio-img portfolio-browser"
            src="https://source.unsplash.com/1000x1751/?corgi"
            alt="Order Summary - Login"
          />
          <figcaption class="figure-caption">Order Summary - Login</figcaption>
        </figure>
        <figure class="figure">
          <img
            class="figure-img portfolio-img portfolio-browser"
            src="https://source.unsplash.com/1000x1751/?corgi"
            alt="Order Summary - Credit Card"
          />
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
        <div class="color-swatches">
          <color-swatch
            v-for="colorSwatch in colorPalette"
            :key="colorSwatch.name"
            :color-swatch="colorSwatch"
          ></color-swatch>
        </div>
      </div>
      <div class="full-width">
        <figure class="figure">
          <img
            class="figure-img portfolio-img portfolio-browser"
            src="https://source.unsplash.com/1920x1080/?corgi"
            alt="Admin Order View"
          />
          <figcaption class="figure-caption">Admin Order View</figcaption>
        </figure>
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
      ],
    }
  },
  head: {
    title: 'McRiver Raid | Matt Crandell',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Website for the McRiver Raid annual camping event was built by Matt Crandell using Angular.',
      },
    ],
  },
}
</script>
