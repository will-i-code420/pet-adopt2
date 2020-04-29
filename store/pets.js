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
  },
  async updatePet ({ dispatch }, info) {
    await this.$axios.put(`/pets/${id}`, info)
    dispatch('getAllPets')
  }
}

export const getters = {
  getPetsCount (state) {
    return state.cats.length + state.dogs.length
  },
  getAdoptedPetsCount (state) {
    const cats = state.cats.filter(cat => cat.adopted === true)
    const dogs = state.dogs.filter(dog => dog.adopted === true)
    return cats.length + dogs.length
  },
  getUnadoptedPets (state) {
    const cats = state.cats.filter(cat => cat.adopted === false)
    const dogs = state.dogs.filter(dog => dog.adopted === false)
    const pets = [...cats, ...dogs]
    return pets
  }
}
