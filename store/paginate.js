export const state = () => ({
  rows: 0,
  perPage: 6
})

export const mutations = {
  SET_ROWS (state, rows) {
    state.rows = rows
  },
  SET_PER_PAGE (state, perPage) {
    state.perPage = perPage
  }
}

export const actions = {
  setRows ({ commit }, rows) {
    commit('SET_ROWS', rows)
  },
  setPerPage ({ commit }, perPage) {
    commit('SET_PER_PAGE', perPage)
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
