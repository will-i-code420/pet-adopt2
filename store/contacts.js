export const state = () => ({
  contacts: []
})

export const mutations = {
  SET_CONTACTS (state, contacts) {
    state.contacts = contacts
  }
}

export const actions = {
  async getAllContacts ({ commit }) {
    const contacts = await this.$axios.get('/contact')
    commit('SET_CONTACTS', contacts.data.contacts)
  },
  async submitNewContact ({ dispatch }, contactForm) {
    const payload = {
      status: null,
      msg: null
    }
    await dispatch('messages/reset', null, { root: true })
    try {
      const newInquiry = await this.$axios.post('/contact', contactForm)
      payload.status = 'success'
      payload.msg = newInquiry.data.msg
      dispatch('messages/setMsgStatus', payload, { root: true })
    } catch (e) {
      payload.status = 'error'
      payload.msg = e.response.data.msg
      dispatch('messages/setMsgStatus', payload, { root: true })
    }
  }
}

export const getters = {
  getContactCount (state) {
    return state.contacts.filter(contact => contact.followUpRequired === true).length
  },
  getSelectedContact (state) {
    return (id) => {
      return state.contacts.filter(contact => contact._id === id)
    }
  },
  getAllResponseRequired (state) {
    return state.contacts.filter(contact => contact.followUpRequired === true)
  }
}
