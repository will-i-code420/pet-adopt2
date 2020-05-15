<template>
  <Form>
    <template #form-group-1>
      <b-form-group
        id="input-group-name"
        label="Your Name:"
        label-for="name"
        :state="nameVerif"
        :invalid-feedback="invalidName"
        :valid-feedback="validName"
      >
      <b-form-input
        id="name"
        v-model="registrationForm.name"
        required
        :state="nameVerif"
        placeholder="Enter name"
      ></b-form-input>
      </b-form-group>
    </template>
    <template #form-group-2>
      <b-form-group
        id="input-group-email"
        label="Your Email:"
        label-for="email"
      >
      <b-form-input
        id="email"
        v-model="registrationForm.email"
        type="email"
        required
        placeholder="example@email.com"
      ></b-form-input>
      </b-form-group>
    </template>
    <template #form-group-3>
      <b-form-group
        id="input-group-username"
        label="Username:"
        label-for="username"
        :state="usernameVerif"
        :invalid-feedback="invalidUserName"
        :valid-feedback="validUserName"
      >
      <b-form-input
        id="username"
        v-model="registrationForm.username"
        required
        :state="usernameVerif"
        placeholder="Enter Username"
      ></b-form-input>
      </b-form-group>
    </template>
    <template #form-group-4>
      <b-form-group
        id="input-group-password"
        label="Password:"
        label-for="password"
      >
      <b-form-input
        id="password"
        v-model="registrationForm.password"
        type="password"
        required
      ></b-form-input>
      </b-form-group>
    </template>
    <template #form-group-5>
      <b-form-group
        id="input-group-confirm-password"
        label="Confirm Password:"
        label-for="confirm-password"
      >
      <b-form-input
        id="confirm-password"
        v-model="password2"
        type="password"
        required
      ></b-form-input>
      </b-form-group>
    </template>
    <template #btn1>
      <b-button variant="primary" class="mt-3 mx-auto px-5 py-2" @click="registerUser">
        Register
      </b-button>
    </template>
    <template #errorMsg>
      <b-alert
        :show="error"
        variant="danger"
      >
        {{ errorMsg }}
      </b-alert>
    </template>
  </Form>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data () {
    return {
      registrationForm: {
        name: '',
        email: '',
        username: '',
        password: ''
      },
      password2: '',
      error: false,
      errorMsg: ''
    }
  },
  computed: {
    nameVerif () {
      return this.registrationForm.name.length > 4
    },
    invalidName () {
      return this.nameVerif ? '' : 'Enter Valid Name'
    },
    validName () {
      return this.nameVerif ? 'Thank You' : ''
    },
    usernameVerif () {
      return this.registrationForm.username.length > 4
    },
    invalidUserName () {
      return this.usernameVerif ? '' : 'Enter Valid Username'
    },
    validUserName () {
      return this.usernameVerif ? 'Thank You' : ''
    }
  },
  methods: {
    comparePassword () {
      return this.registrationForm.password === this.password2
    },
    async registerUser () {
      try {
        if (this.error) {
          this.errorMsg = ''
          this.error = false
        }
        const validPassword = await this.comparePassword()
        if (validPassword) {
          await this.$store.dispatch('user/register', this.registrationForm)
          this.$router.push({ path: '/' })
        }
      } catch (e) {
        this.errorMsg = e.response.data.msg
        this.error = true
      }
    }
  }
}
</script>

<style scoped>
.btn {
  display: flex;
}
</style>
