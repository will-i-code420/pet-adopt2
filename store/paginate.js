export const state = () => ({
  currentPage: 1,
  rows: 0,
  perPage: 6
})

export const mutations = {
  SET_ROWS (state, rows) {
    state.rows = rows
  },
  SET_PER_PAGE (state, perPage) {
    state.perPage = perPage
  },
  SET_CURRENT_PAGE (state, page) {
    state.currentPage = page
  }
}

export const actions = {
  setRows ({ commit }, rows) {
    commit('SET_ROWS', rows)
  },
  setPerPage ({ commit }, perPage) {
    commit('SET_PER_PAGE', perPage)
  },
  setCurrentPage ({ commit }, page) {
    commit('SET_CURRENT_PAGE', page)
  },
  changePage ({ dispatch, state }, selectedPage) {
    const start = (selectedPage - 1) * state.perPage
    const payload = {
      start,
      perPage: state.perPage
    }
    dispatch('pets/updateCurrentPets', payload, { root: true })
  }
}

export const getters = {
  getRows (state) {
    return state.rows
  },
  getPerPage (state) {
    return state.perPage
  }
}
