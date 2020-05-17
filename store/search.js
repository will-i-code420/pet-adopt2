export const state = () => ({
  searchQuery: ''
})

export const mutations = {
  SET_SEARCH_QUERY (state, query) {
    state.searchQuery = query
  }
}

export const actions = {
  setSeachQuery ({ commit }, query) {
    commit('SET_SEARCH_QUERY', query)
  },
  async submitSearch ({ dispatch, state }) {
    const results = await this.$axios.get(`/pets/${state.searchQuery}`)
    dispatch('pets/setSearchPets', results.data.pets, { root: true })
  }
}

export const getters = {}
