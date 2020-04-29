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
  async getSinglePet ({ commit }, { species, id }) {
    const route = species.substring(0, 4)
    const pet = await this.$axios.get(`/${route}/${id}`)
    commit('SET_CURRENT_PET', pet.data.pet)
  },
  async addNewPet ({ dispatch }, { route, petForm }) {
    await this.$axios.post(`${route}`, petForm)
    dispatch('getPets')
  },
  async updatePet ({ dispatch }, { route, id, info }) {
    await this.$axios.put(`${route}/${id}`, info)
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
