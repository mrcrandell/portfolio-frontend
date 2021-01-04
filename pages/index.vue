<template>
  <div class="home-container">
    <Intro />
    <Portfolio :projects="projects" />
  </div>
</template>

<script>
import Intro from '~/components/sections/Intro'
import Portfolio from '~/components/sections/Portfolio'
export default {
  components: {
    Intro,
    Portfolio,
  },
  async asyncData({ app }) {
    const { data } = await app.$axios.get(
      `${process.env.APP_URL}/data/portfolio.json`
    )
    // const projects = projectsData
    // eslint-disable-next-line
    // console.log(data)
    return { projects: data }
  },
  head: {
    title: "Matt Crandell's Portfolio | Web Developer",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Web development by Matt Crandell servicing all of Metro Detroit.',
      },
    ],
  },
}
</script>

<style></style>
