export const state = () => ({
  successMsg: '',
  errorMsg: ''
})

export const mutations = {
  SET_ERROR_MSG (state, msg) {
    state.errorMsg = msg
  },
  SET_SUCCESS_MSG (state, msg) {
    state.successMsg = msg
  }
}

export const actions = {
  setErrorMsg ({ commit }, msg) {
    commit('SET_ERROR_MSG', msg)
  },
  setSuccessMsg ({ commit }, msg) {
    commit('SET_SUCCESS_MSG', msg)
  },
  resetAllMsgs ({ commit }) {
    commit('SET_ERROR_MSG', '')
    commit('SET_SUCCESS_MSG', '')
  }
}

export const getters = {
  getErrorMsg (state) {
    return state.errorMsg
  },
  getSuccessMsg (state) {
    return state.successMsg
  }
}
