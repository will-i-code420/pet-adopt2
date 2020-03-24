<template>
  <header id="nav-bar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Pet Adopt</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Animals" right>
            <b-dropdown-item href="#">Cats</b-dropdown-item>
            <b-dropdown-item href="#">Dogs</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/contact">Contact</b-nav-item>
          <b-nav-form @submit.prevent="searchAnimals">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search pets" v-model="searchQuery"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0">
              Search
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {
      searchQuery: ''
    }
  }
}
</script>

<style scoped>
</style>
