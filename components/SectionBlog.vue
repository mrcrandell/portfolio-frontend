<template>
  <section id="blog" class="page">
    <div class="content">
      <header class="page-header">
        <h1>Blog</h1>
      </header>
      <div class="blog-grid">
        <post-card
          v-for="post in posts"
          :key="post.id"
          :post="post"
        ></post-card>
      </div>
    </div>
  </section>
</template>
<script>
import PostCard from '~/components/post/PostCard'
export default {
  components: {
    PostCard,
  },
  mixins: {
    mutatePost: Function,
  },
  props: {
    posts: {
      type: Array,
      default() {
        return []
      },
    },
  },
  /* async asyncData({ app, store, params, $mutatePost }) {
    // Get posts
    const { data, headers } = await app.$axios.get(
      `${process.env.APP_URL}/blog-api/wp-json/wp/v2/posts?orderby=date&per_page=2&_embed`
    )
    const posts = []
    data.forEach((postData) => {
      const post = $mutatePost(postData)
      posts.push(post)
    })
    return { posts, totalPages: headers['x-wp-totalpages'] }
  }, */
}
</script>
<style lang="scss" scoped>
.blog-grid {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  max-width: $max-width;
  margin: 0 auto;
  //padding: 0 30px;
  @media (min-width: $grid-md) {
    // grid-template-columns: repeat(2, 1fr);
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>