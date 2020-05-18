<template>
  <div class="search-bar-container">
    <Form>
      <slot name="form-group-1">
        <b-form-group
          id="input-group-search"
          label="Pet Name:"
          label-for="search"
        >
        <b-form-input
          id="search"
          v-model="searchQuery"
          type="text"
          required
          :placeholder="`Searching by ${searchType}`"
        ></b-form-input>
        </b-form-group>
      </slot>
      <slot name="form-group-2">
        <b-form-group label="Search Type">
          <b-form-radio-group
            id="type"
            v-model="searchType"
            :options="searchOptions"
            name="search-type"
            required
          ></b-form-radio-group>
        </b-form-group>
      </slot>
      <slot name="btn1">
        <b-button class="my-2 my-sm-0" @click="searchAnimals">
          Search
        </b-button>
      </slot>
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
