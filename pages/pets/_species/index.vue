<template>
  <section :id="$route.params.species-container">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="text-center py-3">
            All {{ $route.params.species }} Looking For A New Home
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="pet in pets" :key="pet._id" md="4">
          <AllPetCards
            :pet="pet"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import AllPetCards from '~/components/AllPetCards'

export default {
  components: {
    AllPetCards
  },
  computed: {
    pets () {
      const species = this.$route.params.species.substring(0, 3)
      return this.$store.getters['pets/getAllSelectedSpecies'](species)
    }
  },
  head () {
    return {
      title: `All ${this.$route.params.species} For Adoption`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Current list of all ${this.$route.params.species} looking for a new home or donations to help`
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
