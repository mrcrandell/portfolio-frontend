<template>
  <div class="container">
    <post-card v-for="post in posts" :key="post.id" :post="post"></post-card>
  </div>
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
  async asyncData({ app, $mutatePost }) {
    // eslint-disable-next-line
    // console.log(process.env.BLOG_API_URL)
    const { data } = await app.$axios.get(
      `${process.env.BLOG_API_URL}/wp-json/wp/v2/posts?orderby=date&per_page=10&_embed`
      // 'http://blog-api.mattcrandell.test/wp-json/wp/v2/posts'
    )
    const posts = []
    data.forEach((postData) => {
      const post = $mutatePost(postData)
      posts.push(post)
    })
    // eslint-disable-next-line
    // console.log(data)
    return { posts }
  },
}
</script>

<style></style>
