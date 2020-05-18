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
import { mapGetters } from 'vuex'
import AllPetCards from '~/components/cards/AllPetCards'
import SearchBar from '~/components/SearchBar'

export default {
  components: {
    AllPetCards,
    SearchBar
  },
  mounted () {
    const species = this.$route.params.species.substring(0, 3)
    this.$store.dispatch('pets/setCurrentPets', species)
  },
  computed: {
    ...mapGetters({
      pets: 'pets/getDisplayPets',
      rows: 'paginate/getRows',
      perPage: 'paginate/getPerPage'
    }),
    title () {
      if (this.$route.params.species === 'all') {
        return 'Pets'
      } else {
        return this.$route.params.species.replace(/^./, this.$route.params.species[0].toUpperCase())
      }
    },
    currentPage: {
      get () {
        return this.$store.state.paginate.currentPage
      },
      set (page) {
        this.$store.dispatch('paginate/setCurrentPage', page)
      }
    }
  },
  methods: {
    async changePage (selectedPage) {
      await this.$store.dispatch('paginate/changePage', selectedPage)
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
