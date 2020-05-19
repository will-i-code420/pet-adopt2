export const state = () => ({
  pets: [],
  currentPets: [],
  displayPets: []
})

export const mutations = {
  SET_ALL_PETS (state, pets) {
    state.pets = pets
  },
  SET_ROWS (state, rows) {
    state.rows = rows
  },
  SET_CURRENT_PETS (state, currentPets) {
    state.currentPets = currentPets
  },
  SET_DISPLAY_PETS (state, displayPets) {
    state.displayPets = displayPets
  }
}

export const actions = {
  async getAllPets ({ commit }) {
    const pets = await this.$axios.get('/pets')
    commit('SET_ALL_PETS', pets.data.pets)
  },
  async addNewPet ({ dispatch }, petForm) {
    const payload = {
      status: null,
      msg: null
    }
    await dispatch('messages/reset', null, { root: true })
    try {
      const newPet = await this.$axios.post('/pets', petForm)
      payload.status = 'success'
      payload.msg = newPet.data.msg
      dispatch('messages/setMsgStatus', payload, { root: true })
      dispatch('getAllPets')
    } catch (e) {
      payload.status = 'error'
      payload.msg = e.response.data.msg
      dispatch('messages/setMsgStatus', payload, { root: true })
    }
  },
  async updatePet ({ dispatch }, { id, petUpdateForm }) {
    await this.$axios.put(`/pets/${id}`, petUpdateForm)
    dispatch('getAllPets')
  },
  async setCurrentPets ({ dispatch, commit, state }, species) {
    let pets
    if (species === 'all') {
      pets = await state.pets.filter(pet => pet.adopted === false)
    } else {
      pets = await state.pets.filter(pet => pet.species === species && pet.adopted === false)
    }
    commit('SET_CURRENT_PETS', pets)
    dispatch('paginate/setRows', pets.length, { root: true })
    dispatch('paginate/changePage', 1, { root: true })
  },
  async updateCurrentPets ({ commit, state }, { start, perPage }) {
    const pets = await state.currentPets.slice(start, start + perPage)
    commit('SET_DISPLAY_PETS', pets)
  },
  async setSearchPets ({ commit, dispatch }, pets) {
    await commit('SET_ALL_PETS', pets)
    dispatch('setCurrentPets', 'all')
  }
}

export const getters = {
  getPetCount (state) {
    return state.pets.length
  },
  getAdoptedPetsCount (state) {
    const pets = state.pets.filter(pet => pet.adopted === true)
    return pets.length
  },
  getUnadoptedPets (state) {
    const pets = state.pets.filter(pet => pet.adopted === false)
    return pets
  },
  getSelectedPet (state) {
    return (id) => {
      return state.pets.filter(pet => pet._id === id)
    }
  },
  getDisplayPets (state) {
    return state.displayPets
  }
}
