export const state = () => ({
  user: {}
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  },
  LOGOUT_USER (state) {
    state.user = {}
  }
}

export const actions = {
  async login ({ commit, dispatch }, userInfo) {
    let user = await this.$axios.post('/login', userInfo)
    user = user.data.user
    if (user.role === 'employee' || user.role === 'admin') {
      dispatch('contacts/getAllContacts', null, { root: true })
    }
    commit('SET_USER', user)
  },
  async register ({ commit }, userInfo) {
    const newUser = await this.$axios.post('/register', userInfo)
    commit('SET_USER', newUser.data.user)
  },
  logout ({ commit }) {
    commit('LOGOUT_USER')
  }
}

export const getters = {
  isAdmin (state) {
    return state.user.role === 'admin'
  }
}
