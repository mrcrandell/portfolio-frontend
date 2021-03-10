<template>
  <div class="project-container">
    <masthead :color="'#00AFD7'">
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
          src="http://placecorgi.com/1920/1080"
          srcset="
            http://placecorgi.com/1920/1080 1x,
            http://placecorgi.com/1920/1080 2x
          "
          alt="Habitat for Humanity of Oakland County"
        />
      </template>
      <template #name>Habitat for Humanity of Oakland County</template>
      <template #caption
        >This custom WordPress backed website for news, events, and other
        valuable resources also features bright yet clean design.</template
      >
    </masthead>
    <div id="skip-to-content"></div>
    <div class="portfolio-item-grid">
      <base-testimonial>
        <template #testimonial>
          Thank you for all of your hard work and support on this. I know we ask
          a lot of you and I appreciate your responsiveness and dedication!
        </template>
        <template #author
          >Stephanie Osterland, Director of Partner & Community
          Programs</template
        >
      </base-testimonial>
      <div class="full-width">
        <h2>Homeownership Programs Custom Apps</h2>
        <p>
          The biggest requirement for the website was to collect information
          from users for Habitat for Humanity of Oakland County's various
          homeownership programs. These apps were created using a combination of
          Vue.js and PHP all within a custom WordPress plugin.
        </p>
        <div class="portfolio-item-grid">
          <figure class="figure">
            <img
              srcset="http://placecorgi.com/2000/1235 2x"
              src="http://placecorgi.com/2000/1235"
              class="figure-img portfolio-img portfolio-browser"
              alt="Critical Home Repair Application"
            />
            <figcaption class="figure-caption">
              Critical Home Repair Application
            </figcaption>
          </figure>
          <figure class="figure">
            <img
              srcset="http://placecorgi.com/2000/1235 2x"
              src="http://placecorgi.com/2000/1235"
              class="figure-img portfolio-img portfolio-browser"
              alt="Homeownership Program Landing Page"
            />
            <figcaption class="figure-caption">
              Homeownership Program Landing Page
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="full-width">
        <h2>Custom News and Events Section</h2>
        <p>
          I created a custom WordPress shortcode that pulled both posts from
          WordPress and events created in
          <a
            href="https://theeventscalendar.com/"
            target="_blank"
            rel="noopener noreferrer"
            >The Event Calendar</a
          >. The section then linked to an entire page that contained the rest
          of the news and events that had been published.
        </p>
        <div class="portfolio-item-grid">
          <figure class="figure">
            <img
              srcset="http://placecorgi.com/2000/1235 2x"
              src="http://placecorgi.com/2000/1235"
              class="figure-img portfolio-img portfolio-browser"
              alt="Homepage News and Events Section"
            />
            <figcaption class="figure-caption">
              Homepage News and Events Section
            </figcaption>
          </figure>
          <figure class="figure">
            <img
              srcset="http://placecorgi.com/2000/1235 2x"
              src="http://placecorgi.com/2000/1235"
              class="figure-img portfolio-img portfolio-browser"
              alt="News and Events Landing Page"
            />
            <figcaption class="figure-caption">
              News and Events Landing Page
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="full-width">
        <h2>Custom Newsletter Signup Form</h2>
        <p>
          To assist with signing up users to their various newsletters, I
          created a WordPress plugin using Vue.js and PHP. The plugin connects
          directly with Constant Contact's API.
        </p>
        <div class="portfolio-item-grid">
          <figure class="figure">
            <img
              srcset="http://placecorgi.com/2000/1235 2x"
              src="http://placecorgi.com/2000/1235"
              class="figure-img portfolio-img portfolio-browser"
              alt="Homepage Newsletter Signup"
            />
            <figcaption class="figure-caption">
              Homepage Newsletter Signup
            </figcaption>
          </figure>
          <figure class="figure">
            <img
              srcset="http://placecorgi.com/2000/1235 2x"
              src="http://placecorgi.com/2000/1235"
              class="figure-img portfolio-img portfolio-browser"
              alt="Restore Newsletter Signup"
            />
            <figcaption class="figure-caption">
              Restore Newsletter Signup
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Masthead from '~/components/portfolio/Masthead.vue'
import BaseTestimonial from '~/components/BaseTestimonial.vue'
export default {
  components: {
    Masthead,
    BaseTestimonial,
  },
}
