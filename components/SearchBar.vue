<template>
  <div class="search-bar-container">
    <Form>
      <template #form-group-1>
        <b-input-group
          id="input-group-search"
          label-for="search"
          label-cols="auto"
          prepend="Search:"
        >
        <b-form-input
          id="search"
          v-model="searchQuery"
          type="text"
          required
          :placeholder="`Searching by ${searchType}`"
        ></b-form-input>
        <b-button variant="primary" class="ml-2 my-2 my-sm-0" @click="searchAnimals">
          Search
        </b-button>
      </b-input-group>
      </template>
      <template #form-group-2>
        <b-form-group label="Search By:" class="text-center mt-2">
          <b-form-radio-group
            id="type"
            v-model="searchType"
            :options="searchOptions"
            name="search-type"
            required
          ></b-form-radio-group>
        </b-form-group>
      </template>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      searchOptions: [
        { text: 'Breed', value: 'breed' },
        { text: 'Gender', value: 'gender' },
        { text: 'Description', value: 'description' }
      ]
    }
  },
  computed: {
    searchQuery: {
      get () {
        return this.$store.state.search.searchQuery
      },
      set (query) {
        this.$store.dispatch('search/setSeachQuery', query)
      }
    },
    searchType: {
      get () {
        return this.$store.state.search.searchType
      },
      set (type) {
        this.$store.dispatch('search/setSearchType', type)
      }
    }
  },
  methods: {
    async searchAnimals () {
      await this.$store.dispatch('search/submitSearch')
      this.$router.push({ path: '/pets/search-results/' + this.searchQuery })
    }
  }
}
</script>

<style scoped>
</style>
