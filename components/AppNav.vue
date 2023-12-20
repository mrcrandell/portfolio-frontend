<template>
  <nav class="navbar">
    <ul>
      <li>
        <nuxtLink :to="{ path: '/', hash: '#portfolio' }">
          Portfolio
        </nuxtLink>
      </li>
      <li>
        <nuxtLink :to="{ path: '/', hash: '#about' }">
          About
        </nuxtLink>
      </li>
      <li>
        <nuxtLink to="/blog">
          Blog
        </nuxtLink>
      </li>
      <li>
        <nuxtLink :to="{ path: '/', hash: '#contact' }">
          Contact
        </nuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav.navbar {
  width: 100%;
  @media (min-width: $grid-lg) {
    width: auto;
    flex: 1 0 auto;
    max-width: 500px;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
    height: 100%;
    align-items: center;
    a,
    button {
      @extend a;
      border: 0;
      background: transparent;
      display: block;
      padding: 0.5rem 0.0625rem;
      @media (min-width: $grid-md) {
        font-size: 1.25rem; // 20px
      }
    }
  }
}
</style>