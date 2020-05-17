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
  async setRows ({ commit }, rows) {
    commit('SET_ROWS', rows)
  },
  async setPerPage({ commit }, perPage) {
    commit('SET_PER_PAGE', perPage)
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
