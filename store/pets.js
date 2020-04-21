export const state = () => ({
  cats: [],
  dogs: [],
  currentPet: {}
})

export const mutations = {
  SET_CATS (state, cats) {
    state.cats = cats
  },
  SET_DOGS (state, dogs) {
    state.dogs = dogs
  },
  SET_CURRENT_PET (state, pet) {
    state.currentPet = pet
  }
}

export const actions = {
  async getPets ({ commit }) {
    const dogs = await this.$axios.get('/dogs')
    const cats = await this.$axios.get('/cats')
    commit('SET_DOGS', dogs.data.dogs)
    commit('SET_CATS', cats.data.cats)
  },
  async getSinglePet ({ commit }, { species, id }) {
    const animal = species.substring(0, 4)
    const pet = await this.$axios.get(`/${animal}/${id}`)
    commit('SET_CURRENT_PET', pet.data.pet)
  }
}
