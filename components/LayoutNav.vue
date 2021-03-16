<template>
  <nav class="navbar">
    <ul>
      <nuxt-link
        v-slot="{ href, navigate, isActive, isExactActive }"
        :to="{ path: '/', hash: '#portfolio' }"
      >
        <li
          :class="[
            isActive && 'nuxt-link-active',
            isExactActive && 'nuxt-link-exact-active',
          ]"
        >
          <a :href="href" @click="navigate">Portfolio</a>
        </li>
      </nuxt-link>
      <nuxt-link
        v-slot="{ href, navigate, isActive, isExactActive }"
        :to="{ path: '/', hash: '#about' }"
      >
        <li
          :class="[
            isActive && 'nuxt-link-active',
            isExactActive && 'nuxt-link-exact-active',
          ]"
        >
          <a :href="href" @click="navigate">About</a>
        </li>
      </nuxt-link>
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
      <nuxt-link
        v-slot="{ href, navigate, isActive, isExactActive }"
        :to="{ path: '/', hash: '#contact' }"
      >
        <li
          :class="[
            isActive && 'nuxt-link-active',
            isExactActive && 'nuxt-link-exact-active',
          ]"
        >
          <a :href="href" @click="navigate">Contact</a>
        </li>
      </nuxt-link>
      <!--<li class="{{(isset($active_page) && $active_page == 'portfolio')?'active':''}}"><a class="{{(isset($active_page) && $active_page == 'home')?'page-scroll':''}}" href="{{url('/#portfolio')}}">Portfolio</a></li>
              <li class="{{(isset($active_page) && $active_page == 'about')?'active':''}}"><a class="{{(isset($active_page) && $active_page == 'home')?'page-scroll':''}}" href="{{url('/#about')}}">About</a></li>
              <li class="{{(isset($active_page) && $active_page == 'contact')?'active':''}}"><a class="{{(isset($active_page) && $active_page == 'home')?'page-scroll':''}}" href="{{url('/#contact')}}">Contact</a></li>
              <li class="{{(isset($active_page) && $active_page == 'blog')?'active':''}}"><a href="{{url('/blog')}}">Blog</a></li>-->
    </ul>
  </nav>
</template>
<script>
export default {
  computed: {
    isHome() {
      return this.$route.name === 'index' && !process.client
    },
  },
}
</script>