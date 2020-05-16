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
          v-for="pet in currentPets"
          :key="pet._id"
          :pet="pet"
        />
      </b-row>
      <b-row>
        <b-col cols="4" offset="4">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-text="⏮"
            prev-text="⏪"
            next-text="⏩"
            last-text="⏭"
            @input="changePage(currentPage)"
          >
          </b-pagination>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import AllPetCards from '~/components/cards/AllPetCards'

export default {
  components: {
    AllPetCards
  },
  data () {
    return {
      currentPage: 1,
      perPage: 3,
      currentPets: []
    }
  },
  computed: {
    pets () {
      const species = this.$route.params.species.substring(0, 3)
      const allPets = this.$store.getters['pets/getAllSelectedSpecies'](species)
      this.setCurrentPets(allPets)
      return allPets
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
  methods: {
    setCurrentPets (pets) {
      this.currentPets = pets.slice(0, this.perPage)
    },
    changePage (currentPage) {
      const start = (currentPage - 1) * this.perPage
      this.currentPets = this.pets.slice(start, start + this.perPage)
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
