import * as readingTime from 'reading-time'
export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('mutatePost', (postData) => {
    const post = {}
    post.title = postData.title.rendered;
    // http://blog-api.mattcrandell.test/blog-api/uncategorized/2020/11/hello-world/
    // http://localhost:3000/https://dev.mattcrandell.com/blog-api/server-stuff/2020/12/setting-up-an-ubuntu-20-04-web-server/
    post.link = postData.link.replace(
      `${process.env.APP_URL}/blog-api`,
      '/blog'
    );

    post.originalLink = postData.link
    post.apiUrl = `${process.env.APP_URL}/blog-api`
    post.date = new Date(postData.date)
    // Mutate Categories
    post.categories = postData._embedded['wp:term'][0].filter(
      (category) => category.slug !== 'uncategorized'
    )
    post.categories.forEach((category) => {
      category.link = '/blog/category/' + category.slug
    })
    // Content
    post.content = postData.content.rendered
    post.exceprt = postData.excerpt.rendered
    post.readTime = readingTime(postData.content.rendered, {
      wordsPerMinute: 300,
    }).text
    // Featured Img
    post.featuredImg = {
      alt: '',
      src: '',
      thumbnail: {
        src: '',
        width: 0,
        height: 0,
      },
      medium: {
        // Smallest WordPress size by default // Max 576
        src: '',
        width: 0,
        height: 0,
      },
      large: {
        // Max 992
        src: '',
        width: 0,
        height: 0,
      },
      full: {
        src: '',
        width: 0,
        height: 0,
      },
    }
    post.featuredImg.src = postData._embedded['wp:featuredmedia']
      ? postData._embedded['wp:featuredmedia'][0].source_url
      : ''
    post.featuredImg.alt = postData._embedded['wp:featuredmedia']
      ? postData._embedded['wp:featuredmedia'][0].alt_text
        ? postData._embedded['wp:featuredmedia'][0].alt_text
        : postData.title.rendered
      : postData.title.rendered
    if (
      postData._embedded['wp:featuredmedia'] &&
      postData._embedded['wp:featuredmedia'][0] &&
      postData._embedded['wp:featuredmedia'][0].code !== 'rest_forbidden'
    ) {
      const imgSizes =
        postData._embedded['wp:featuredmedia'][0].media_details.sizes
      Object.keys(post.featuredImg).forEach((key) => {
        if (!['alt', 'src'].includes(key) && imgSizes[key]) {
          post.featuredImg[key].src = imgSizes[key].source_url
          post.featuredImg[key].width = imgSizes[key].width
          post.featuredImg[key].height = imgSizes[key].height
        }
      })
    }
    return post
  })
}
