<template>
  <figure class="testimonial">
    <blockquote>
      <slot name="testimonial" />
    </blockquote>
    <figcaption><slot name="author" /></figcaption>
  </figure>
</template>
<style lang="scss" scoped>
.testimonial {
  padding-left: 1rem;
  padding-right: 1rem;
}
blockquote {
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  &::before,
  &::after {
    font-size: 3rem; // 48px
    display: inline-block;
    vertical-align: middle;
    position: relative;
    line-height: 0;
    // padding: 0 2px;
    color: $apple;
    // position: absolute;
  }
  &::before {
    content: '\201C';
    padding-right: 0.25rem; // 4px
    // top: 0;
    // left: -1rem;
  }
  &::after {
    content: '\201D';
    padding-left: 0.25rem; // 4px
    // bottom: 0;
    // right: -1rem;
  }
}
figcaption {
  text-align: right;
  font-size: 1.125rem; // 18px
  &::before {
    content: '\2014\00a0';
  }
}
</style>