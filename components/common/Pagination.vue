<template>
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Pagination',
  computed: {
    ...mapGetters({
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
    }
  },
  methods: {
    async changePage (selectedPage) {
      await this.$store.dispatch('paginate/changePage', selectedPage)
    }
  }
}
</script>

<style scoped>
</style>
