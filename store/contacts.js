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
  }
}

export const getters = {
  getContactCount (state) {
    return state.contacts.filter(contact => contact.followUpRequired === true).length
  }
}
