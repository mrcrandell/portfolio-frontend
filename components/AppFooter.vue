<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-contact">
          <p>
            Phone: <a
              class="phone"
              href="tel:+12483835376"
            >248-383-5376</a>
          </p>
          <p>
            Email:
            <a href="mailto:me@mattcrandell.com">me@mattcrandell.com</a>
          </p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        Copyright &copy; {{ new Date().getFullYear() }} Matt Crandell &amp;
        Crandell Design. All Rights Reserved.
      </p>
      <p>
        Designated trademarks and brands are the property of their respective
        owners.
      </p>
      <p>All graphics are created by Matt Crandell.</p>
    </div>
    <!-- scroll_top_btn -->
    <!--<button id="toTop" class="scroll-top-button img-circle pointer"><i class="fa fa-angle-up"></i></button>-->
    <!--end scroll_top_btn -->
  </footer>
</template>
<style scoped lang="scss">
footer.footer {
  .footer-top {
    background-color: $black;
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      @media (min-width: $grid-md) {
        max-width: $max-width;
        margin: 0 auto;
      }
    }
    .footer-contact {
      color: $french-gray;
      padding: 1rem 0;
      font-size: 1rem;
      width: 100%;
      @media (min-width: $grid-md) {
        display: flex;
        justify-content: center;
        // width: auto;
        // margin-left: auto;
      }
      p {
        margin-bottom: 0.125rem; // 2px
        text-align: center;
        @media (min-width: $grid-md) {
          margin-left: 2rem; // 32px
          margin-right: 2rem; // 32px
          // text-align: right;
        }
      }
      a {
        color: #fff;
        font-weight: $font-weight-normal;
        &:hover {
          color: $french-gray;
        }
      }
    }
  }
  .footer-bottom {
    padding: 30px;
    text-align: center;
    font-size: 0.75rem; // 12px
    @media (min-width: $grid-md) {
      max-width: $max-width;
      margin: 0 auto;
    }
    p {
      margin-bottom: 0.125rem; // 2px
    }
  }
}
</style>
