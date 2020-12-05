<template>
  <header class="header">
    <div class="container">
      <div class="logo-container">
        <nuxt-link to="/">
          <Logo />
        </nuxt-link>
      </div>
      <nav class="navbar">
        <ul>
          <nuxt-link
            v-slot="{ href, navigate, isActive, isExactActive }"
            to="/blog"
          >
            <li
              :class="[
                isActive && 'nuxt-link-active',
                isExactActive && 'nuxt-link-exact-active',
              ]"
            >
              <a :href="href" @click="navigate">Blog</a>
            </li>
          </nuxt-link>
          <!--<li class="{{(isset($active_page) && $active_page == 'portfolio')?'active':''}}"><a class="{{(isset($active_page) && $active_page == 'home')?'page-scroll':''}}" href="{{url('/#portfolio')}}">Portfolio</a></li>
              <li class="{{(isset($active_page) && $active_page == 'about')?'active':''}}"><a class="{{(isset($active_page) && $active_page == 'home')?'page-scroll':''}}" href="{{url('/#about')}}">About</a></li>
              <li class="{{(isset($active_page) && $active_page == 'contact')?'active':''}}"><a class="{{(isset($active_page) && $active_page == 'home')?'page-scroll':''}}" href="{{url('/#contact')}}">Contact</a></li>
              <li class="{{(isset($active_page) && $active_page == 'blog')?'active':''}}"><a href="{{url('/blog')}}">Blog</a></li>-->
        </ul>
      </nav>
    </div>
  </header>
</template>
<style scoped lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';

header.header {
  position: fixed;
  width: 100%;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 20;
  border-bottom: 1px solid $sanmarino;
  @include box_shadow(3);
  > .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 15px;
    @media (min-width: $grid-sm) {
      padding: 0 30px;
    }
    @media (min-width: $grid-md) {
      //grid-template-columns: 50% 50%;
      max-width: $max-width;
      margin: 0 auto;
    }
    .logo-container {
      min-width: 250px;
      max-width: 400px;
      max-height: 75px;
      padding: 15px 0;
      margin: 0 auto;
      @media (min-width: $grid-lg) {
        margin: 0;
      }
      a {
        display: block;
      }
    }
    .navbar {
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
        a {
          display: block;
          padding: 0.5rem 0.0625rem;
          @media (min-width: $grid-md) {
            font-size: 1.25rem; // 20px
          }
        }
      }
    }
  }
}
</style>
