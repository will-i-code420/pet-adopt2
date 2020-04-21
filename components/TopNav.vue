<template>
  <header id="nav-bar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Pet Adopt</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Animals" right>
            <b-dropdown-item to="/cats">Cats</b-dropdown-item>
            <b-dropdown-item to="/dogs">Dogs</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/contact">Contact</b-nav-item>
          <b-nav-form @submit.prevent="searchAnimals">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search pets" v-model="searchQuery"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0">
              Search
            </b-button>
          </b-nav-form>
          <b-nav-item-dropdown text="Login" right>
            <b-nav-form>
              <b-form-input size="sm" class="mx-3 my-2" placeholder="Username/Email" v-model="loginForm.name"></b-form-input>
              <b-form-input size="sm" class="mx-3 my-2" placeholder="Password" v-model="loginForm.password" type="password"></b-form-input>
              <b-button @click="loginUser" size="sm" class="my-2 my-sm-0 mx-auto">
                Login
              </b-button>
            </b-nav-form>
          </b-nav-item-dropdown>
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
      searchQuery: '',
      loginForm: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser () {
      console.log(`sending login for ${this.loginForm.name} w/ pass: ${this.loginForm.password}`)
    }
  }
}
</script>

<style scoped>
</style>
