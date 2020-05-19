export const state = () => ({
  successMsg: '',
  errorMsg: '',
  errorStatus: false,
  successStatus: false,
})

export const mutations = {
  SET_ERROR_MSG (state, msg) {
    state.errorMsg = msg
  },
  SET_SUCCESS_MSG (state, msg) {
    state.successMsg = msg
  },
  SET_ERROR_STATUS (state, status) {
    state.errorStatus = status
  },
  SET_SUCCESS_STATUS (state, status) {
    state.successStatus = status
  }
}

export const actions = {
  setMsgStatus ({ commit, dispatch }, { status, msg }) {
    if (status === true) {
      commit('SET_ERROR_STATUS', status)
      dispatch('setErrorMsg', msg)
    } else {
      commit('SET_SUCCESS_STATUS', status)
      dispatch('setSuccessMsg', msg)
    }
  },
  setErrorMsg ({ commit }, msg) {
    commit('SET_ERROR_MSG', msg)
  },
  setSuccessMsg ({ commit }, msg) {
    commit('SET_SUCCESS_MSG', msg)
  },
  reset ({ commit }) {
    commit('SET_SUCCESS_STATUS', false)
    commit('SET_ERROR_STATUS', false)
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
  },
  getErrorStatus (state) {
    return state.errorStatus
  },
  getSuccessStatus (state) {
    return state.successStatus
  }
}
