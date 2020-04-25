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
              <b-form-input size="sm" class="mx-3 my-2" placeholder="Username" v-model="loginForm.name"></b-form-input>
              <b-form-input size="sm" class="mx-3 my-2" placeholder="Password" v-model="loginForm.password" type="password"></b-form-input>
              <b-button @click="loginUser" size="sm" class="my-2 my-sm-0 mx-auto">
                Login
              </b-button>
              <b-alert
                :show="error"
                variant="danger"
                class="text-center"
              >
                {{ errorMsg }}
              </b-alert>
            </b-nav-form>
            <hr>
            <div class="login-links">
              <nuxt-link to="/register">
                Create Account
              </nuxt-link>
              <nuxt-link to="/reset">
                Forgot Username/Password
              </nuxt-link>
            </div>
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
      },
      error: false,
      errorMsg: ''
    }
  },
  methods: {
    async loginUser () {
      try {
        if (this.error) {
          this.error = false
          this.errorMsg = ''
        }
        await this.$store.dispatch('user/login', this.loginForm)
      } catch (e) {
        this.errorMsg = e.response.data.msg
        this.error = true
      }
    }
  }
}
</script>

<style scoped>

.login-links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-links a {
  margin: .4em;
  font-size: .8em;
}
</style>
