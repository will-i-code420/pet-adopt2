<template>
  <section :id="$route.params.species + 'container'">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="text-center py-3">
            All {{ title }} Looking For A New Home
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <AllPetCards
          v-for="pet in pets"
          :key="pet._id"
          :pet="pet"
        />
      </b-row>
      <b-row>
        <b-col cols="4" offset="4">
          <Pagination
            :rows="rows"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import AllPetCards from '~/components/cards/AllPetCards'
import Pagination from '~/components/Pagination'

export default {
  components: {
    AllPetCards,
    Pagination
  },
  computed: {
    pets () {
      const species = this.$route.params.species.substring(0, 3)
      return this.$store.getters['pets/getAllSelectedSpecies'](species)
    },
    rows () {
      return this.pets.length
    },
    title () {
      if (this.$route.params.species === 'all') {
        return 'Pets'
      } else {
        return this.$route.params.species.replace(/^./, this.$route.params.species[0].toUpperCase())
      }
    }
  },
  head () {
    return {
      title: `All ${this.title} For Adoption`,
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
