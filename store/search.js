export const state = () => ({
  searchQuery: '',
  searchType: 'description'
})

export const mutations = {
  SET_SEARCH_QUERY (state, query) {
    state.searchQuery = query
  },
  SET_SEARCH_TYPE (state, type) {
    state.searchType = type
  }
}

export const actions = {
  setSeachQuery ({ commit }, query) {
    commit('SET_SEARCH_QUERY', query)
  },
  setSearchType ({ commit }, type) {
    commit('SET_SEARCH_TYPE', type)
  },
  async submitSearch ({ dispatch, state }) {
    const results = await this.$axios.get(`/pets/${state.searchQuery}`, state.searchType)
    dispatch('pets/setSearchPets', results.data.pets, { root: true })
  }
}

export const getters = {}
