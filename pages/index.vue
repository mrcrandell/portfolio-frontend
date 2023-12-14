<template>
  <div class="home-container">
    <SectionIntro />
    <SectionPortfolio :projects="projects" />
    <SectionAbout />
    <SectionBlog :posts="posts" />
    <SectionContact />
  </div>
</template>

<script>
import SectionIntro from '~/components/SectionIntro'
import SectionPortfolio from '~/components/SectionPortfolio'
import SectionContact from '~/components/SectionContact'
import SectionAbout from '~/components/SectionAbout'
import SectionBlog from '~/components/SectionBlog'
export default {
  components: {
    SectionIntro,
    SectionPortfolio,
    SectionContact,
    SectionAbout,
    SectionBlog,
  },
  async asyncData({ app, $mutatePost }) {
    const projects = await app.$axios.get(
      `${process.env.APP_URL}/data/portfolio.json`
    )

    // Get posts
    const { data } = await app.$axios.get(
      `${process.env.APP_URL}/blog-api/wp-json/wp/v2/posts?orderby=date&per_page=2&_embed`
    )
    const posts = []
    data.forEach((postData) => {
      const post = $mutatePost(postData)
      posts.push(post)
    })

    return { projects: projects.data, posts }
  },
  head: {
    title: "Matt Crandell's Portfolio | Web Developer",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Matt Crandel is a seasoned front end web developer with over ten years experience working with everything from small businesses to large corporations.',
      },
    ],
  },
}
</script>

<style></style>
