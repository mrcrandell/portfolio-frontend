<template>
  <article class="article-container entry">
    <header class="entry-masthead">
      <post-featured-img :featured-img="post.featuredImg" />
      <div class="entry-header">
        <div class="entry-meta">
          <a
            v-for="category in post.categories"
            :key="category.id"
            class="category-link"
            :href="category.link"
            >{{ category.name }}</a
          >
        </div>
        <h1 class="entry-title" v-html="post.title"></h1>
        <div class="entry-meta">
          <time class="updated" :datetime="post.date | date('yyyy-MM-dd')">
            {{ post.date | date('MMMM d, yyyy') }}
          </time>
          <div class="read-time">{{ post.readTime }}</div>
        </div>
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
  head() {
    return {
      title: `${this.post.title} | Matt Crandell`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.excerpt,
        },
      ],
    }
  },
}
</script>
