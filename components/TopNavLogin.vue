<template>
  <b-nav-item-dropdown text="Login" right>
    <b-nav-form>
      <b-form-input size="sm" class="mx-3 my-2" placeholder="Username" v-model="loginForm.name"></b-form-input>
      <b-form-input size="sm" class="mx-3 my-2" placeholder="Password" v-model="loginForm.password" type="password"></b-form-input>
      <b-button @click="loginUser" size="sm" class="my-2 my-sm-2 mx-auto">
        Login
      </b-button>
      <ErrorMsg />
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
</template>

<script>
export default {
  name: 'TopNavLogin',
  data () {
    return {
      loginForm: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser () {
      this.$store.dispatch('user/login', this.loginForm)
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
