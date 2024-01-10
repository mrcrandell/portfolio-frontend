<script setup>
definePageMeta({
  title: "Matt Crandell's Blog | Web Developer",
  description: 'Matt Crandel is a seasoned front end web developer with over ten years experience working with everything from small businesses to large corporations.'
});
</script>
<template>
  <div class="blog-index-container">
    <header class="page-header">
      <h1>Blog</h1>
    </header>
    <p>Pardon the dust. Coming back soon.</p>
  </div>
</template>

<style lang="scss" scoped>
.blog-index-container {
  padding: ($nav-height + 3rem) 2rem 0 2rem;
  > * {
    max-width: $max-width;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>