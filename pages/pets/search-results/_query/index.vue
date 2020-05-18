<template>
  <section id="search-results-container">
    <b-container class="my-4">
      <b-row>
        <b-col>
          <h1 class="text-center mb-3">
            {{ title }} Search Results
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <AllPetCards
            v-for="pet in pets"
            :key="pet._id"
            :pet="pet"
          />
        </b-col>
      </b-row>
      <b-row class="mt-3">
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

export default {
  components: {
    AllPetCards
  },
  computed: {
    ...mapGetters({
      pets: 'pets/getDisplayPets',
      rows: 'paginate/getRows',
      perPage: 'paginate/getPerPage'
    }),
    currentPage: {
      get () {
        return this.$store.state.paginate.currentPage
      },
      set (page) {
        this.$store.dispatch('paginate/setCurrentPage', page)
      }
    },
    title () {
      return this.$route.params.query.replace(/^./, this.$route.params.query[0].toUpperCase())
    }
  },
  methods: {
    async changePage (selectedPage) {
      await this.$store.dispatch('paginate/changePage', selectedPage)
    }
  },
  head () {
    return {
      title: `${this.title} Search Results`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `List of all ${this.title} pets looking for a new home`
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
