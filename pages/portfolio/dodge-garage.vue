<template>
  <div class="project-container">
    <masthead :color="'#DC0000'">
      <template #picture>
        <source
          type="image/webp"
          srcset="
            /img/portfolio/dodge-garage/featured-img.webp    1x,
            /img/portfolio/dodge-garage/featured-img@2x.webp 2x
          "
        />
        <source
          type="image/jpeg"
          srcset="
            /img/portfolio/dodge-garage/featured-img.jpg    1x,
            /img/portfolio/dodge-garage/featured-img@2x.jpg 2x
          "
        />
        <img
          loading="lazy"
          class="img-fluid"
          src="/img/portfolio/dodge-garage/featured-img.jpg"
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
    <div id="skip-to-content"></div>
    <div class="portfolio-item-grid">
      <p>
        The team began working on the site that eventually became Dodge Garage
        in late 2016, while I took over as one of the main programmers in 2017
        through mid-2020.
      </p>
      <p>
        Throughout my tenure on the project, it was updated from Angular 2 beta
        to version 9. The site now utilizes server side rendering and a rest API
        built in Groovy/Grails. While the team learned the proper techniques of
        programming for Angular, JQuery was used as a stopgap. By 2020, almost
        all of the JQuery code had been replaced with more efficient code.
      </p>
      <div>
        <h2>Login / Register</h2>
        <div class="login-register-container">
          <video autoplay loop class="figure-img portfolio-img">
            <source
              src="/video/portfolio/dodge-garage/mobile-sign-in-sign-up.mp4"
              type="video/mp4"
            />
            <source
              src="/video/portfolio/dodge-garage/mobile-sign-in-sign-up.ogg"
              type="video/ogg"
            />
            <source
              src="/video/portfolio/dodge-garage/mobile-sign-in-sign-up.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
      <div>
        <h2>Homepage</h2>
        <img
          srcset="
            /img/portfolio/dodge-garage/browser-homepage.png    1x,
            /img/portfolio/dodge-garage/browser-homepage@2x.png 2x
          "
          src="/img/portfolio/dodge-garage/browser-homepage.png"
          alt="Homepage"
          class="portfolio-img portfolio-browser"
        />
      </div>
      <div class="full-width">
        <h2>Drag Strip Showdown</h2>
        <p>
          Dodge hosted drag racing simulators at many events they promoted. Drag
          Strip Showdown was a contest that tied Dodge Garage into the
          simulators. This project involved collaboration between developers
          like myself, onsite staff and the third-party company that ran the
          simulators. Here is how it worked:
        </p>
        <ol>
          <li>Users would register onsite on site and be given a QR code</li>
          <li>
            User would scan the QR code once at the simulator and their time,
            speed, etc would be recorded
          </li>
          <li>
            Rankings would be displayed onsite then sent back to the website API
            to be stored
          </li>
          <li>
            An online leaderboard would display the rankings for the ongoing
            event and a nationwide contest
          </li>
          <li>
            User data collected onsite would then either link to an existing
            user or create a user automatically
          </li>
        </ol>
        <div class="portfolio-item-grid">
          <figure class="figure">
            <img
              srcset="
                /img/portfolio/dodge-garage/drag-strip-showdown-simulators.jpg    1x,
                /img/portfolio/dodge-garage/drag-strip-showdown-simulators@2x.jpg 2x
              "
              src="/img/portfolio/dodge-garage/drag-strip-showdown-simulators.jpg"
              class="figure-img portfolio-img"
              alt="Onsite Simulators"
            />
            <figcaption class="figure-caption">Onsite Simulators</figcaption>
          </figure>
          <figure class="figure">
            <img
              srcset="
                /img/portfolio/dodge-garage/browser-drag-strip-showdown.png 1x
                /img/portfolio/dodge-garage/browser-drag-strip-showdown@2x.png 2x
              "
              src="/img/portfolio/dodge-garage/browser-drag-strip-showdown.png"
              class="figure-img portfolio-img portfolio-browser"
              alt="Leaderboard for Racers"
            />
            <figcaption class="figure-caption">
              Screenshot of the leaderboard on the website. An onsite
              leaderboard displaying that days rankings was also created.
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="full-width">
        <h2>1320 Club</h2>
        <p>
          The 1320 club is a social media network where users can share their
          vehicle and 1/4 mile time slips. Launched in early 2019, the hub
          features leaderboards based on vehicle classification, profiles to
          display vehicles and badges (awards) earned, and ability to comment on
          time slips.
        </p>
        <div class="portfolio-item-grid">
          <figure class="figure">
            <img
              srcset="
                /img/portfolio/dodge-garage/browser-1320.png    1x,
                /img/portfolio/dodge-garage/browser-1320@2x.png 2x
              "
              src="/img/portfolio/dodge-garage/browser-1320.png"
              class="figure-img portfolio-img portfolio-browser"
              alt="1320 Landing Page"
            />
            <figcaption class="figure-caption">1320 Landing Page</figcaption>
          </figure>
          <div class="portfolio-item-grid">
            <figure class="figure">
              <img
                srcset="
                  /img/portfolio/dodge-garage/mobile-1320-leaderboards@2x.png 2x
                "
                src="/img/portfolio/dodge-garage/mobile-1320-leaderboards.png"
                class="figure-img portfolio-img portfolio-browser"
                alt="1320 Leaderboard"
              />
              <figcaption class="figure-caption">1320 Leaderboard</figcaption>
            </figure>
            <figure class="figure">
              <img
                srcset="
                  /img/portfolio/dodge-garage/mobile-1320-add-vehicle.png    1x,
                  /img/portfolio/dodge-garage/mobile-1320-add-vehicle@2x.png 2x
                "
                src="/img/portfolio/dodge-garage/mobile-1320-add-vehicle.png"
                class="figure-img portfolio-img portfolio-browser"
                alt="1320 Leaderboard"
              />
              <figcaption class="figure-caption">1320 Add Vehicle</figcaption>
            </figure>
          </div>
          <figure class="figure">
            <img
              srcset="
                /img/portfolio/dodge-garage/browser-my-garage.png    1x,
                /img/portfolio/dodge-garage/browser-my-garage@2x.png 2x
              "
              src="/img/portfolio/dodge-garage/browser-my-garage.png"
              class="figure-img portfolio-img portfolio-browser"
              alt="My Garage"
            />
            <figcaption class="figure-caption">My Garage</figcaption>
          </figure>
          <figure class="figure">
            <img
              srcset="
                /img/portfolio/dodge-garage/browser-my-slip.png    1x,
                /img/portfolio/dodge-garage/browser-my-slip@2x.png 2x
              "
              src="/img/portfolio/dodge-garage/browser-my-slip.png"
              class="figure-img portfolio-img portfolio-browser"
              alt="My Slip"
            />
            <figcaption class="figure-caption">My Slip</figcaption>
          </figure>
        </div>
      </div>
      <div class="full-width">
        <h2>Racing HQ</h2>
        <div class="portfolio-item-grid">
          <figure class="figure">
            <img
              srcset="
                /img/portfolio/dodge-garage/browser-racing-hq.png    1x,
                /img/portfolio/dodge-garage/browser-racing-hq@2x.png 2x
              "
              src="/img/portfolio/dodge-garage/browser-racing-hq.png"
              alt="Racing HQ Landing Page"
              class="figure-img portfolio-img portfolio-browser"
            />
            <figcaption class="figure-caption">
              I spearheaded a redesign of the Racing HQ Landing page in early
              2020 bringing in the latest frontend practices and the ability to
              pull approved videos from the Vimeo API.
            </figcaption>
          </figure>
          <figure class="figure">
            <img
              srcset="
                /img/portfolio/dodge-garage/browser-track-locator.png    1x,
                /img/portfolio/dodge-garage/browser-track-locator@2x.png 2x
              "
              src="/img/portfolio/dodge-garage/browser-track-locator.png"
              alt="Racing HQ Track Locator Page"
              class="figure-img portfolio-img portfolio-browser"
            />
            <figcaption class="figure-caption">
              The Racing HQ Track Locator page would search for race tracks
              based on query parameters from the API.
            </figcaption>
          </figure>
        </div>
      </div>

      <div>
        <h2>Technical Features</h2>
        <ul>
          <li>Angular frontend</li>
          <li>
            Server-side rendering (SSR) via
            <a
              href="https://angular.io/guide/universal"
              target="_blank"
              rel="noopener noreferrer"
              >Angular Universal</a
            >
          </li>
          <li>
            Grails/Groovy backend API used to provide:
            <ul>
              <li>User registration and login</li>
              <li>Events</li>
              <li>Racetrack information</li>
              <li>And much more</li>
            </ul>
          </li>
          <li>News utilizing the WordPress API</li>
          <li>
            Commenting system utilizing the
            <a
              href="https://docs.discourse.org/"
              target="_blank"
              rel="noopener noreferrer"
              >Discourse API</a
            >
          </li>
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
    </div>
  </div>
</template>
<script>
import Masthead from '~/components/portfolio/Masthead.vue'
import ColorSwatch from '~/components/portfolio/ColorSwatch.vue'
export default {
  components: {
    Masthead,
    ColorSwatch,
  },
  data() {
    return {
      colorPalette: [
        {
          name: 'Primary 01',
          hex: '#000000',
        },
        {
          name: 'Primary 02',
          hex: '#FFFFFF',
        },
        {
          name: 'Primary 03',
          hex: '#DC0000',
        },
        {
          name: 'Secondary 01',
          hex: '#ECECEC',
        },
        {
          name: 'Secondary 02',
          hex: '#D9D9D9',
        },
        {
          name: 'Secondary 03',
          hex: '#BDBDBD',
        },
        {
          name: 'Secondary 04',
          hex: '#A5A5A5',
        },
        {
          name: 'Secondary 05',
          hex: '#7F7F7F',
        },
        {
          name: 'Secondary 06',
          hex: '#585858',
        },
        {
          name: 'Secondary 07',
          hex: '#3E3E3E',
        },
        {
          name: 'Success',
          hex: '#5CB85C',
        },
        {
          name: 'Danger',
          hex: '#DC0000',
        },
        {
          name: 'Warning',
          hex: '#FADC09',
        },
      ],
    }
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
<style lang="scss" scoped>
.login-register-container {
  max-width: 320px;
  margin: 0 auto;
}
</style>
