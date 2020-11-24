<template>
  <article class="article-container">
    <post-featured-img :featured-img="post.featuredImg" />
    <header class="entry-header">
      <h1 class="entry-title" v-html="post.title"></h1>
      <div class="entry-meta">
        <time class="updated" :datetime="post.date | date('yyyy-MM-dd')">
          {{ post.date | date('MMMM d, yyyy') }}
          <!--{{ date("F j, Y", strtotime($post['published_at'])) }}-->
        </time>
      </div>
    </header>
    <div class="entry-content" v-html="post.content"></div>
  </article>
</template>

<script>
import { dateFilter } from 'vue-date-fns'
import PostFeaturedImg from '~/components/post/PostFeaturedImg'
import Prism from '~/plugins/prism'
export default {
  components: {
    PostFeaturedImg,
  },
  filters: {
    date: dateFilter,
  },
  async asyncData({ app, params, $mutatePost }) {
    const { data } = await app.$axios.get(
      `${process.env.BLOG_API_URL}/wp-json/wp/v2/posts`,
      {
        params: {
          slug: params.slug,
          _embed: true,
        },
      }
    )
    const post = $mutatePost(data[0])
    return { post }
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';

.article-container {
  max-width: $max-width;
  margin: 0 auto;
  padding: 0 30px;
  header {
    margin: 2rem 0; // 32px 0
  }
  .entry-meta {
    display: flex;
    flex-wrap: wrap;
    font-size: 0.875rem; // 14px
    > time,
    > div {
      margin-right: 0.875rem; // 14px
    }
  }
}
</style>
