export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('mutatePost', (postData) => {
    const post = {}
    post.title = postData.title.rendered
    // http://blog-api.mattcrandell.test/blog-api/uncategorized/2020/11/hello-world/
    post.link = postData.link.replace(
      `${process.env.BLOG_API_URL}/blog-api`,
      '/blog'
    )
    post.date = new Date(postData.date)
    post.content = postData.content.rendered
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
