<template>
  <article class="blog-tile">
    <nuxt-link
      v-if="post.featuredImg.src"
      :to="post.link"
      class="featured-img-container"
    >
      <post-featured-img
        :featured-img="post.featuredImg"
        :is-post-card="true"
      />
    </nuxt-link>
    <div class="blog-tile-content">
      <div class="entry-meta">
        <a
          v-for="category in post.categories"
          :key="category.id"
          class="category-link"
          :href="category.link"
          >{{ category.name }}</a
        >
      </div>
      <h1 class="entry-title">
        <nuxt-link :to="post.link" v-html="post.title"></nuxt-link>
      </h1>
      <div class="entry-meta">
        <time class="updated" :datetime="post.date | date('yyyy-MM-dd')">
          {{ post.date | date('MMMM d, yyyy') }}
        </time>
        <div class="read-time">{{ post.readTime }}</div>
      </div>
      <div
        v-if="!post.featuredImg.src"
        class="exceprt"
        v-html="post.exceprt"
      ></div>
      <nuxt-link :to="post.link" class="btn btn-primary btn-read-more"
        >Read More</nuxt-link
      >
    </div>
  </article>
</template>
<script>
import { dateFilter } from 'vue-date-fns'
import PostFeaturedImg from '~/components/post/PostFeaturedImg'
export default {
  components: {
    PostFeaturedImg,
  },
  filters: {
    date: dateFilter,
  },
  props: {
    post: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';
.blog-tile {
  border: 1px solid $sanmarino;
  @include box-shadow(1);
  @include transition(box-shadow 0.3s ease-in-out);
  a.featured-img-container {
    display: block;
    overflow: hidden;
    ::v-deep img {
      width: 100%;
      @include transition(all 0.3s ease-in-out);
    }
  }
  .blog-tile-content {
    padding: 1.5rem; // 24px
    .btn {
      margin-top: 1rem;
    }
    .exceprt + .btn {
      margin-top: 0;
    }
  }
  .entry-title {
    font-size: $h2-font-size;
    color: $black;
    margin-bottom: 0.5rem;
    flex: 1;
  }
  .entry-meta {
    display: flex;
    flex-wrap: wrap;
    font-size: 0.875rem; // 14px
    > time,
    > div,
    > a {
      margin-right: 0.875rem; // 14px
    }
    .category-link::before {
      content: ' ';
      display: inline-block;
      -webkit-mask: url('~assets/img/folder-icon.svg') no-repeat;
      mask: url('~assets/img/folder-icon.svg') no-repeat;
      -webkit-mask-size: contain;
      mask-size: contain;
      background-size: contain;
      background-color: $link-color;
      width: 1em;
      height: 1em;
      margin-right: 0.25rem; // 4px
      @include transition(background-color 0.3s ease-in-out);
    }
    .category-link:hover::before {
      background-color: $link-hover-color;
    }
  }
  &:hover {
    @include box-shadow(2);
    a.featured-img-container {
      ::v-deep img {
        transform: scale(1.05);
      }
    }
  }
}
</style>
