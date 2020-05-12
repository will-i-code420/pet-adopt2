export const state = () => ({
  pets: []
})

export const mutations = {
  SET_ALL_PETS (state, pets) {
    state.pets = pets
  }
}

export const actions = {
  async getAllPets ({ commit }) {
    const pets = await this.$axios.get('/pets')
    commit('SET_ALL_PETS', pets.data.pets)
  },
  async addNewPet ({ dispatch }, petForm) {
    await this.$axios.post('/pets', petForm)
    dispatch('getAllPets')
  }
  /* need to finish with edit-pet-page
  async updatePet ({ dispatch }, info) {
    await this.$axios.put(`/pets/${id}`, info)
    dispatch('getAllPets')
  }
  */
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
  }
}
