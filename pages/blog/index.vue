<template>
  <div class="blog-index-container">
    <header class="page-header">
      <h1>Blog</h1>
    </header>
    <div class="blog-grid">
      <post-card v-for="post in posts" :key="post.id" :post="post"></post-card>
    </div>
    <post-pagination
      :current-page="parseInt(currentPage)"
      :total-pages="parseInt(totalPages)"
    ></post-pagination>
  </div>
</template>
<script>
import PostCard from '~/components/post/PostCard'
import PostPagination from '~/components/post/PostPagination'
export default {
  name: 'Blog',
  components: {
    PostCard,
    PostPagination,
  },
  mixins: {
    mutatePost: Function,
  },
  async asyncData({ app, store, params, $mutatePost }) {
    // Get category data if needed
    if (!store.state.categories) {
      const categoryResponse = await app.$axios.get(
        `${process.env.APP_URL}/blog-api/wp-json/wp/v2/categories?per_page=100`
      )
      store.commit('setCategories', categoryResponse.data)
    }
    // Begin setting params
    const getParams = {}
    getParams.page = params.pageNum ? params.pageNum : 1
    if (params.category) {
      const selectedCategory = store.state.categories.filter(
        (category) => category.slug === params.category
      )[0]
      getParams.categories = selectedCategory.id
    }
    // Get posts
    const { data, headers } = await app.$axios.get(
      `${process.env.APP_URL}/blog-api/wp-json/wp/v2/posts?orderby=date&per_page=10&_embed`,
      {
        params: getParams,
      }
    )
    const posts = []
    data.forEach((postData) => {
      const post = $mutatePost(postData)
      posts.push(post)
    })
    // eslint-disable-next-line
    // console.log(data)
    return { posts, totalPages: headers['x-wp-totalpages'] }
  },
  data() {
    return {
      // totalPages: 1,
      currentPage: this.$route.params.pageNum ? this.$route.params.pageNum : 1,
    }
  },
  mounted() {
    // eslint-disable-next-line
    console.log(this.totalPages)
    this.$router.options.routes.forEach((route) => {
      // eslint-disable-next-line
      // console.log(route.path)
      /* this.items.push({
        name: route.name,
        path: route.path,
      }) */
    })
  },
}
</script>

<style scoped lang="scss">
// Blog List
/* Style similar to portfolio. Max at 2 wide and then single for slimmer
devices. Image and title go to article. Category is its own link.
Hover with slight zoom of image (similier to portfolio). */
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';
.blog-index-container {
  padding: ($nav-height + 3rem) 2rem 0 2rem;
}
.blog-grid {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  max-width: $max-width;
  margin: 0 auto;
  //padding: 0 30px;
  @media (min-width: $grid-lg) {
    // grid-template-columns: repeat(2, 1fr);
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
