export const state = () => ({
  user: {}
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}

export const actions = {
  async login ({ commit }, userInfo) {
    const user = await this.$axios.post('/login', userInfo)
    console.log(user.data.user)
    commit('SET_USER', user.data.user)
  },
  async register ({ commit }, userInfo) {
    const newUser = await this.$axios.post('/register', userInfo)
    console.log(newUser.data.user)
    commit('SET_USER', newUser.data.user)
  }
}
