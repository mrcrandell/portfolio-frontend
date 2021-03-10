<template>
  <div class="project-container">
    <masthead :color="'#005a2c'">
      <template #picture>
        <source
          type="image/webp"
          srcset="/img/portfolio/four-green-fields-farm/featured-img.webp"
        />
        <source
          type="image/jpeg"
          srcset="/img/portfolio/four-green-fields-farm/featured-img.jpg"
        />
        <img
          loading="lazy"
          class="img-fluid"
          src="/img/portfolio/four-green-fields-farm/featured-img.jpg"
          srcset="
            /img/portfolio/four-green-fields-farm/featured-img.jpg    1x,
            /img/portfolio/four-green-fields-farm/featured-img@2x.jpg 2x
          "
          alt="Four Green Fields Farm"
        />
      </template>
      <template #name>Four Green Fields Farm</template>
      <template #meta>
        <div>Rodney, MI</div>
        <!-- <div class="btn-view-more-container">
          <button
            class="btn btn-outline-white"
            @click="scrollIntoView('skip-to-content')"
          >
            View More
          </button>
        </div> -->
      </template>
      <template #caption>
        As one of Crandell Design's earliest clients, the website for Four Green
        Fields Farm is kept up to date with improvements and redesigns including
        a new admin interface to update events.
      </template>
      <!--<template #meta>
        <a href="https://www.dodgegarage.com" target="_blank">View Website</a>
      </template>-->
      <!--<template #caption>
        In 2018, while working at the JRT agency, my team and I launched an
        enthusiast platform for Dodge.
      </template>-->
    </masthead>
    <div id="skip-to-content"></div>
    <div class="portfolio-item-grid">
      <base-testimonial>
        <template #testimonial>
          I've been a customer of Crandell Design since 2009 and have never once
          considered switching to another company for my web site services. The
          level of service and quality of the product has simply been
          outstanding. The affordability is also critical to a small business
          like mine. What impresses me most about Matt is that he can take my
          ideas for my website and rapidly make them reality. That is so
          important for a person like me who does not possess the technical
          skill or ability to manage my own site. I have no doubt that the level
          of professional service and the resulting high quality website
          provided by Crandell Design have been an important factor in the
          growth of my business.
        </template>
        <template #author>Kevin Courtney, Owner</template>
      </base-testimonial>
      <div>
        <img
          srcset="
            /img/portfolio/four-green-fields-farm/browser-homepage@2x.jpg 2x
          "
          src="/img/portfolio/four-green-fields-farm/browser-homepage.jpg"
          alt="Homepage of the Four Green Fields Farm Website"
          class="portfolio-img portfolio-browser"
        />
      </div>
      <div>
        <img
          srcset="
            /img/portfolio/four-green-fields-farm/mockup-ipad-iphone@2x.jpg 2x
          "
          src="/img/portfolio/four-green-fields-farm/mockup-ipad-iphone.jpg"
          alt="The Four Green Fields Farm Website on a Mobile Device"
          class="portfolio-img"
        />
      </div>
      <div class="full-width">
        <h2>Event Calendar</h2>
        <p>
          On the website, Kevin required a solution to add and display events. I
          created an admin interface to do just that. He can now login, add or
          edit events, and display them without any techinical knowledge.
        </p>
        <div class="portfolio-item-grid">
          <figure class="figure">
            <img
              srcset="
                /img/portfolio/four-green-fields-farm/browser-events@2x.jpg 2x
              "
              src="/img/portfolio/four-green-fields-farm/browser-events.jpg"
              class="figure-img browser-img portfolio-img"
              alt="Event Calendar"
            />
            <figcaption class="figure-caption">Event Calendar</figcaption>
          </figure>
          <figure class="figure">
            <img
              srcset="
                /img/portfolio/four-green-fields-farm/browser-events-open@2x.jpg 2x
              "
              src="/img/portfolio/four-green-fields-farm/browser-events-open.jpg"
              class="figure-img browser-img portfolio-img"
              alt="Event Calendar with Event Open"
            />
            <figcaption class="figure-caption">
              Event Calendar with Event Open
            </figcaption>
          </figure>
        </div>
      </div>
      <div>
        <h2>Technical Features</h2>
        <ul>
          <li>Entire site built using Laravel (PHP)</li>
          <li>Login and event administrative functionality</li>
        </ul>
        <p>
          <a
            href="https://www.fourgreenfieldsfarm.com"
            class="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            >See the website</a
          >
        </p>
        <p>
          <a
            href="https://github.com/crandelldesign/fourgreenfieldsfarm"
            class="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            >See the Source Code</a
          >
        </p>
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
    </div>
  </div>
</template>
<script>
import Masthead from '~/components/portfolio/Masthead.vue'
import BaseTestimonial from '~/components/BaseTestimonial.vue'
import ColorSwatch from '~/components/portfolio/ColorSwatch.vue'
export default {
  components: {
    Masthead,
    BaseTestimonial,
    ColorSwatch,
  },
  data() {
    return {
      colorPalette: [
        {
          name: 'Camarone',
          hex: '#005a2c',
        },
        {
          name: 'Green Haze',
          hex: '#00a651',
        },
        {
          name: 'Holly',
          hex: '#000e07',
        },
        {
          name: 'Supernova',
          hex: '#ffcb05',
        },
        {
          name: 'Mustard',
          hex: '#FFDB52',
        },
        {
          name: 'Pirate Gold',
          hex: '#b89100',
        },
        {
          name: 'Chicory Flower',
          hex: '#647b97',
        },
        {
          name: 'Bali Hai',
          hex: '#91a2b6',
        },
        {
          name: 'Rainmaker',
          hex: '#465669',
        },
      ],
    }
  },
  head: {
    title: 'Four Green Fields Farm | Matt Crandell',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Website for Four Green Fields Farm built by Matt Crandell using Laravel.',
      },
    ],
  },
}
</script>
