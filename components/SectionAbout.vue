<template>
  <section id="about" class="page">
    <div class="content">
      <div><img src="/img/matt-crandell.jpg" alt="Matt Crandell" /></div>
      <div>
        <header class="page-header">
          <h1>Hi, I'm Matt Crandell</h1>
        </header>
        <p>
          Ever since I launched my first website in 2001, I have had a great
          passion for web development. Currently, I am a full-time employee for
          a marketing company where I handle various projects to satisfy their
          web and app development needs. Always a tinkerer, I enjoy playing with
          various side projects and freelance work. I hold degrees in Graphic
          Design and Computer Information Systems from Ferris State University.
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section#about {
  background: $rhino no-repeat center center fixed;
  color: #fff;
  h1 {
    color: #fff;
  }
  .page-header {
    border-color: #fff;
  }
}
.content {
  display: grid;
  grid-gap: 2rem;
  @media (min-width: $grid-lg) {
    grid-template-columns: 40% 1fr;
    align-items: center;
    max-width: $max-width;
  }
}
img {
  display: block;
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 0 auto;
  @include box-shadow(2);
  border: 2px solid $sanmarino;
}
</style>