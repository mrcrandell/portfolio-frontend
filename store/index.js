export const strict = false

export const state = () => ({
  categories: null,
})

export const mutations = {
  setCategories(state, data) {
    state.categories = data
  },
}
