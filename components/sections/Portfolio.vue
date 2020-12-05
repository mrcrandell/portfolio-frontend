<template>
  <section id="portfolio" class="page">
    <div v-for="project in projects" :key="project.slug">Hi</div>
    <PortfolioCard
      v-for="project in projects"
      :key="project.slug"
      :project="project"
    />
  </section>
</template>
<script>
import PortfolioCard from '~/components/portfolio/PortfolioCard'
export default {
  name: 'Portfolio',
  components: {
    PortfolioCard,
  },
  props: {
    projects: {
      type: Array,
      default() {
        return []
      },
    },
    count: {
      type: String,
      default() {
        return '8'
      },
    },
  },
  mounted() {
    // eslint-disable-next-line
    // console.log('hi')
  },
}
</script>
