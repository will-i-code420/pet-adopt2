export const state = () => ({
  successMsg: '',
  errorMsg: '',
  errorStatus: false
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
  }
}

export const actions = {
  setMsgStatus ({ commit, dispatch }, { status, msg }) {
    if (status === true) {
      commit('SET_ERROR_STATUS', status)
      dispatch('setErrorMsg', msg)
    } else {
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
  }
}
