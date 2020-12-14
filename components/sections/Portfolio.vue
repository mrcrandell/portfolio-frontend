<template>
  <section id="portfolio" class="page">
    <div class="content">
      <header class="page-header">
        <h1>Portfolio</h1>
        <p>
          Crandell Design and Matt Crandell work with businesses of all sizes.
          Check out some of the expert work that I have provided. Click on an
          item below to see more.
        </p>
      </header>
      <div class="portfolio-grid">
        <PortfolioCard
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        />
      </div>
    </div>
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
<style scoped lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';
.portfolio-grid {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: $max-width;
  margin: 0 auto;
  //padding: 0 30px;
  @media (min-width: $grid-lg) {
    // grid-template-columns: repeat(2, 1fr);
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
