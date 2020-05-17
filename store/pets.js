export const state = () => ({
  pets: [],
  currentPets: [],
  rows: 0
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
  }
}

export const actions = {
  async getAllPets ({ commit }) {
    const pets = await this.$axios.get('/pets')
    await commit('SET_ALL_PETS', pets.data.pets)
  },
  async addNewPet ({ dispatch }, petForm) {
    await this.$axios.post('/pets', petForm)
    await dispatch('getAllPets')
  },
  async updatePet ({ dispatch }, { id, petUpdateForm }) {
    await this.$axios.put(`/pets/${id}`, petUpdateForm)
    await dispatch('getAllPets')
  },
  async setCurrentPets ({ commit, state }, species) {
    let pets
    if (species === 'all') {
      pets = await state.pets.filter(pet => pet.adopted === false)
    } else {
      pets = await state.pets.filter(pet => pet.species === species && pet.adopted === false)
    }
    await commit('SET_ROWS', pets.length)
    await commit('SET_CURRENT_PETS', pets)
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
  getCurrentSelectedPets (state) {
    return state.currentPets
  },
  getRows (state) {
    return state.rows
  }
}
