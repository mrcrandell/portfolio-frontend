<template>
  <nuxt-link class="portfolio-thumbnail" :to="`/portfolio/${project.slug}`">
    <div class="client-img">
      <img
        :srcset="`${displayImg2x} 2x`"
        :src="project.displayImg"
        :alt="project.name"
        class="img-fluid main-img"
      />
      <img
        :srcset="`${hoverImg2x} 2x`"
        :src="project.hoverImg"
        :alt="project.name"
        class="img-fluid hover-img"
      />
    </div>
    <div class="info">
      <div class="client-name">{{ project.name }}</div>
      <div class="project-meta">
        <div v-if="project.city" class="client-location">
          {{ project.city }}, {{ project.state }}
        </div>
        <button class="btn btn-sm btn-primary">View Project</button>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    displayImg2x() {
      return this.project.displayImg.replace('.jpg', '@2x.jpg')
    },
    hoverImg2x() {
      return this.project.hoverImg.replace('.jpg', '@2x.jpg')
    },
  },
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';
.portfolio-thumbnail {
  border: 1px solid $sanmarino;
  @include box-shadow(1);
  @include transition(box-shadow 0.3s ease-in-out);
  display: flex;
  flex-direction: column;
  div.client-img {
    overflow: hidden;
    position: relative;
    img {
      display: block;
      max-width: 100%;
      width: 100%;
      height: auto;
      @include transition(all 0.3s ease-in-out);
    }
    .hover-img {
      opacity: 0;
      visibility: hidden;
      position: absolute;
      top: 0;
    }
  }
  div.info {
    padding: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    .client-name {
      font-size: 1rem; // 16px
      line-height: 1.3;
      color: $black;
      margin-bottom: 0.5rem;
      flex: 1;
    }
    .project-meta,
    .client-location {
      font-size: 0.875rem; // 14px
      color: $middle-gray;
    }
    .project-meta {
      display: flex;
      align-items: center;
      > *:not(.client-location) {
        margin-left: auto;
      }
    }
  }
  &:hover {
    @include box-shadow(2);
    div.client-img {
      .main-img {
        opacity: 0;
        visibility: hidden;
      }
      .hover-img {
        opacity: 1;
        visibility: visible;
        transform: scale(1.05);
      }
    }
    .btn {
      background-color: $goblin;
    }
  }
}
</style>
