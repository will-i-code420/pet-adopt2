<template>
  <b-nav-item-dropdown text="Login" right>
    <b-nav-form>
      <b-form-input size="sm" class="mx-3 my-2" placeholder="Username" v-model="loginForm.name"></b-form-input>
      <b-form-input size="sm" class="mx-3 my-2" placeholder="Password" v-model="loginForm.password" type="password"></b-form-input>
      <b-button @click="loginUser" size="sm" class="my-2 my-sm-2 mx-auto">
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
</template>

<script>
export default {
  name: 'TopNavLogin',
  data () {
    return {
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
        this.loginForm.name = ''
        this.loginForm.password = ''
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
