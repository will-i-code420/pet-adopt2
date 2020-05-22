export const state = () => ({
  user: {},
  active: false
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
    state.active = true
  },
  LOGOUT_USER (state) {
    state.user = {}
    state.active = false
  }
}

export const actions = {
  async login ({ commit, dispatch }, userInfo) {
    await dispatch('messages/reset', null, { root: true })
    try {
      const response = await this.$axios.post('/login', userInfo)
      const user = response.data.user
      if (user.role === 'admin' || user.role === 'employee') {
        dispatch('contacts/getAllContacts', null, { root: true })
      }
      commit('SET_USER', user)
    } catch (e) {
      const payload = {
        status: 'error',
        msg: e.response.data.msg
      }
      dispatch('messages/setMsgStatus', payload, { root: true })
    }
  },
  async register ({ commit, dispatch }, userInfo) {
    const payload = {
      status: null,
      msg: null
    }
    await dispatch('messages/reset', null, { root: true })
    try {
      const newUser = await this.$axios.post('/register', userInfo)
      commit('SET_USER', newUser.data.user)
    } catch (e) {
      payload.status = 'error'
      payload.msg = e.response.data.msg
      dispatch('messages/setMsgStatus', payload, { root: true })
    }
  },
  async addUser ({ dispatch }, newUserForm) {
    const payload = {
      status: null,
      msg: null
    }
    await dispatch('messages/reset', null, { root: true })
    try {
      const newUser = await this.$axios.post('/add-user', newUserForm)
      payload.status = 'success'
      payload.msg = newUser.data.msg
      dispatch('messages/setMsgStatus', payload, { root: true })
    } catch (e) {
      payload.status = 'error'
      payload.msg = e.response.data.msg
      dispatch('messages/setMsgStatus', payload, { root: true })
    }
  },
  async reset ({ dispatch }, { route, resetForm }) {
    const payload = {
      status: null,
      msg: null
    }
    await dispatch('messages/reset', null, { root: true })
    try {
      const userReset = await this.$axios.post(`${route}`, resetForm)
      payload.status = 'success'
      payload.msg = userReset.data.msg
      dispatch('messages/setMsgStatus', payload, { root: true })
    } catch (e) {
      payload.status = 'error'
      payload.msg = e.response.data.msg
      dispatch('messages/setMsgStatus', payload, { root: true })
    }
  },
  async updateInfo ({ commit, dispatch }, { id, userUpdateForm }) {
    const payload = {
      status: null,
      msg: null
    }
    await dispatch('messages/reset', null, { root: true })
    try {
      const profileUpdate = await this.$axios.post(`/edit-userInfo/${id}`, userUpdateForm)
      payload.status = 'success'
      payload.msg = profileUpdate.data.msg
      dispatch('messages/setMsgStatus', payload, { root: true })
      commit('SET_USER', profileUpdate.data.user)
    } catch (e) {
      payload.status = 'error'
      payload.msg = e.response.data.msg
      dispatch('messages/setMsgStatus', payload, { root: true })
    }
  },
  logout ({ commit }) {
    commit('LOGOUT_USER')
  }
}

export const getters = {
  isAdmin (state) {
    return state.user.role === 'admin'
  },
  isActive (state) {
    return state.active
  },
  getAllUserInfo (state) {
    return state.user
  },
  getUserName (state) {
    return state.user.username
  }
}
