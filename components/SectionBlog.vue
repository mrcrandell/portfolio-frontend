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
      <div class="btn-read-more-container">
        <nuxt-link to="/blog" class="btn btn-primary">
          Read More Articles
          <svg
            id="i-chevron-right"
            viewBox="0 0 32 32"
            width="12"
            height="12"
            fill="none"
            stroke="currentcolor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M12 30 L24 16 12 2" />
          </svg>
        </nuxt-link>
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
.btn-read-more-container {
  margin: 2rem auto 0 auto;
  text-align: center;
}
</style>