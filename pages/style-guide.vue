<template>
  <div class="style-page">
    <header class="page-header">
      <h1>Style Guide</h1>
    </header>
    <div class="content">
      <div>
        <h1>Color Palette</h1>

        <div class="color-swatches">
          <div class="color-swatch swatch1">
            Apple<br />
            #4cb848
          </div>
          <div class="color-swatch swatch2">
            De York<br />
            #82cd7f
          </div>
          <div class="color-swatch swatch3">
            Goblin<br />
            #358132
          </div>
          <div class="color-swatch swatch4">
            San Marino<br />
            #4759a7
          </div>
          <div class="color-swatch swatch5">
            Ship Cove<br />
            #7685c5
          </div>
          <div class="color-swatch swatch6">
            Rhino<br />
            #303c71
          </div>
          <div class="color-swatch swatch7">
            Red<br />
            #f86c6b
          </div>
          <div class="color-swatch swatch8">
            French Gray<br />
            #bbbbbd
          </div>
          <div class="color-swatch swatch9">
            Middle Gray<br />
            #707071
          </div>
          <div class="color-swatch swatch10">
            Mostly Black<br />
            #252525
          </div>
          <div class="color-swatch swatch11">
            Black<br />
            #000000
          </div>
        </div>

        <hr />

        <h1>Buttons</h1>

        <p>
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-tertiary">Tertiary</button>
        </p>
        <p>
          <button type="button" class="btn btn-outline-primary">Primary</button>
          <button type="button" class="btn btn-outline-secondary">
            Secondary
          </button>
          <button type="button" class="btn btn-outline-tertiary">
            Tertiary
          </button>
          <button type="button" class="btn btn-outline-white">White</button>
        </p>
      </div>
      <div>
        <hr class="mobile-only" />
        <h1>Typography</h1>

        <h1>Heading 1</h1>
        <p class="details">Font: Aileron / San Marino #4759a7</p>

        <hr />

        <h2>Heading 2</h2>
        <p class="details">Font: Aileron / Goblin #358132</p>

        <hr />

        <h3>Heading 3</h3>
        <p class="details">Font: Aileron / Black #252525</p>

        <hr />

        <p>Body Text</p>
        <p>
          Lorem ipsum dolor sit amet, quis quam, fusce duis. Montes vestibulum
          esse, tristique dui lorem. Wisi cubilia. Nonummy justo, eros aliquet
          elit, nulla sollicitudin ut. Iaculis sit lacus, nisi orci nunc, pede
          convallis vestibulum.
        </p>
        <p>
          Sed tellus. Posuere est quis, lacus sit nec. Ultricies vehicula arcu,
          nunc nonummy id. Vivamus odio neque, faucibus duis. Non diam amet,
          elit nec semper.
        </p>

        <p>
          <a href="#">This is a link</a> -
          <a href="#" class="hover">This is a hover link</a>
        </p>

        <p class="details">Font: Aileron / Black #252525</p>
      </div>
      <div>
        <hr />
        <h1>Form Elements</h1>
        <form>
          <div class="grid-2">
            <div class="form-group">
              <label>First name</label>
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                value="Mark"
                required
              />
            </div>
            <div class="form-group">
              <label>Last name</label>
              <input
                type="text"
                class="form-control is-valid"
                placeholder="Last name"
                value="Otto"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="form-group">
              <label>City</label>
              <input
                type="text"
                class="form-control is-invalid"
                placeholder="City"
                required
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div class="form-group">
              <label>State</label>
              <input
                type="text"
                class="form-control is-invalid"
                placeholder="State"
                required
              />
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
            <div class="form-group">
              <label>Zip</label>
              <input
                type="text"
                class="form-control is-invalid"
                placeholder="Zip"
                required
              />
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
          </div>
          <div>
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
      </div>
      <div>
        <hr />
        <div class="alert alert-success" role="alert">
          A simple success alert with
          <a href="#" class="alert-link">an example link</a>. Give it a click if
          you like.
        </div>
        <div class="alert alert-danger" role="alert">
          A simple danger alert with
          <a href="#" class="alert-link">an example link</a>. Give it a click if
          you like.
        </div>
        <!--<div class="alert alert-warning" role="alert">
        A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div class="alert alert-info" role="alert">
        A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div class="alert alert-light" role="alert">
        A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div class="alert alert-dark" role="alert">
        A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>-->
      </div>
      <div>
        <hr />
        <h1>Components</h1>
      </div>
    </div>
    <div class="full-width">
      <masthead :color="'#4759a7'">
        <template #picture>
          <img
            loading="lazy"
            class="img-fluid"
            src="~assets/img/intro-wallpaper.jpg"
            srcset="
              ~assets/img/intro-wallpaper.jpg    1x,
              ~assets/img/intro-wallpaper@2x.jpg 2x
            "
            alt="Anybody can make a website"
          />
        </template>
        <template #name>Masthead</template>
        <template #meta>
          <div>Meta Data 1</div>
          <div>Meta Data 2</div>
        </template>
      </masthead>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      postCard: {},
    }
  },
  head: {
    title: 'Style Guide | Matt Crandell',
  },
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';
.style-page {
  padding: ($nav-height + 3rem) 2rem 0 2rem;
  .full-width {
    margin-left: -2rem;
    margin-right: -2rem;
  }
}
.content {
  max-width: $max-width;
  margin: 0 auto;
  padding: 30px;
  display: grid;
  grid-gap: 30px;
  @media (min-width: $grid-md) {
    grid-template-columns: repeat(2, 1fr);
  }
  > div {
    /*&:nth-child(2) {
      @media (min-width: $grid-md) {
        grid-column: 2;
        grid-row: 1 / 3;
      }
    }*/
  }
}
.mobile-only {
  @media (min-width: $grid-md) {
    display: none;
  }
}
</style>
