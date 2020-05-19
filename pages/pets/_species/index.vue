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
        <b-col cols="6" offset="3" >
          <SearchBar />
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
          <Pagination />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import AllPetCards from '~/components/cards/AllPetCards'
import SearchBar from '~/components/SearchBar'

export default {
  components: {
    AllPetCards,
    SearchBar
  },
  mounted () {
    this.$store.dispatch('pets/setCurrentPets', this.$route.params.species)
  },
  computed: {
    ...mapGetters({
      pets: 'pets/getDisplayPets'
    }),
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
