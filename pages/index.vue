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
import axios from 'axios';
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
  mixins: {
    mutatePost: Function,
  },
  async fetch() {
    this.projects = await axios.get(
      `${process.env.APP_URL}/data/portfolio.json`
    );
    const { data } = await axios.get(
      `${process.env.APP_URL}/blog-api/wp-json/wp/v2/posts?orderby=date&per_page=2&_embed`
    )
    data.forEach((postData) => {
      const post = this.mutatePost(postData)
      this.posts.push(post)
    })
  },
  data() {
    return {
      projects: [],
      posts: [],
    }
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
