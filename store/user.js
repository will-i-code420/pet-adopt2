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
  async login ({ commit }, userInfo) {
    const user = await this.$axios.post('/login', userInfo)
    commit('SET_USER', user.data.user)
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
