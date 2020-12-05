<template>
  <nav v-if="totalPages > 1" aria-label="pagination navigation">
    <ul class="pagination">
      <nuxt-link
        v-slot="{ href, navigate, isActive }"
        :to="`/blog/page/${previousPage}`"
      >
        <li
          class="page-item"
          :class="[
            isActive && 'nuxt-link-active',
            { disabled: currentPage === 1 },
          ]"
          :aria-disabled="currentPage === 1"
          aria-label="Previous"
        >
          <a
            v-if="currentPage !== 1"
            :href="href"
            class="page-link"
            @click="navigate"
          >
            <svg
              id="i-chevron-left"
              viewBox="0 0 32 32"
              width="12"
              height="12"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M20 30 L8 16 20 2"></path>
            </svg>
            Previous</a
          >
          <span v-else class="page-link"
            ><svg
              id="i-chevron-left"
              viewBox="0 0 32 32"
              width="12"
              height="12"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M20 30 L8 16 20 2"></path>
            </svg>
            Previous</span
          >
        </li>
      </nuxt-link>
      <nuxt-link
        v-for="page in pages"
        :key="page"
        v-slot="{ href, navigate, isActive }"
        :to="`/blog/page/${page}`"
      >
        <li
          class="page-item"
          :class="[
            isActive && 'nuxt-link-active',
            { disabled: currentPage === page },
          ]"
          :aria-disabled="currentPage === page"
          :aria-label="page"
        >
          <a
            v-if="currentPage !== page"
            :href="href"
            class="page-link"
            @click="navigate"
            >{{ page }}</a
          >
          <span v-else class="page-link">{{ page }}</span>
        </li>
      </nuxt-link>
      <nuxt-link
        v-slot="{ href, navigate, isActive }"
        :to="`/blog/page/${nextPage}`"
      >
        <li
          class="page-item"
          :class="[isActive && 'nuxt-link-active', { disabled: isLastPage }]"
          :aria-disabled="isLastPage"
          aria-label="Next"
        >
          <a
            v-if="!isLastPage"
            :href="href"
            class="page-link"
            @click="navigate"
          >
            Next
            <svg
              id="i-chevron-right"
              viewBox="0 0 32 32"
              width="12"
              height="12"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M12 30 L24 16 12 2"></path></svg
          ></a>
          <span v-else class="page-link"
            >Next
            <svg
              id="i-chevron-right"
              viewBox="0 0 32 32"
              width="12"
              height="12"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M12 30 L24 16 12 2"></path></svg
          ></span>
        </li>
      </nuxt-link>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default() {
        return 1
      },
    },
    totalPages: {
      type: Number,
      default() {
        return 1
      },
    },
  },
  computed: {
    previousPage() {
      return this.currentPage - 1
    },
    nextPage() {
      return this.currentPage + 1
    },
    isLastPage() {
      return this.currentPage === this.totalPages
    },
    pages() {
      const pages = []
      for (let index = 1; index <= this.totalPages; index++) {
        pages.push(index)
      }
      return pages
    },
  },
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';
// Pagination
.pagination {
  display: flex;
  padding: 0;
  justify-content: center;
  .page-item {
    display: block;
    text-align: center;
    height: 30px;
    padding: 0 5px;
    .page-link {
      // color: $link-color;
      display: block;
      font-size: 0.9375rem; // 15px
      padding: 5px;
      line-height: 30px;
      text-decoration: none;
    }
    &.active,
    &.nuxt-link-active {
      //background-color: $black;
      .page-link {
        color: $black;
        border-bottom: 1px solid $black;
      }
    }
    &.disabled .page-link {
      cursor: default;
      color: $french-gray;
    }
    i {
      font-size: 2rem;
    }
  }
}
</style>
