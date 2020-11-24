import Vue from 'vue'

Vue.mixin({
  methods: {
    mutateArticle(articleData) {
      const article = {}
      // http://blog-api.mattcrandell.test/blog-api/uncategorized/2020/11/hello-world/
      article.link = articleData.link
      return article
    },
  },
})
