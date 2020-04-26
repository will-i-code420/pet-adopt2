<template lang="html">
  <b-form>
    <b-form-group
      id="input-group-email"
      label="Your Email:"
      label-for="email"
    >
    <b-form-input
      id="email"
      v-model="resetForm.email"
      type="email"
      required
      placeholder="example@email.com"
    ></b-form-input>
    </b-form-group>
    <b-button variant="primary" class="mt-3 px-5 py-2" @click="submitReset('/resetPassword')">
      Reset Password
    </b-button>
    <b-button variant="primary" class="mt-3 px-5 py-2" @click="submitReset('/getUsername')">
      Get Username
    </b-button>
    <b-alert
      :show="error"
      variant="danger"
    >
      {{ errorMsg }}
    </b-alert>
    <b-alert
      :show="submitted"
      dismissible
      fade
      variant="success"
    >
      {{ resetMsg }}
    </b-alert>
  </b-form>
</template>

<script>
export default {
  name: 'ResetForm',
  data () {
    return {
      resetForm: {
        email: ''
      },
      submitted: false,
      resetMsg: '',
      error: false,
      errorMsg: ''
    }
  },
  methods: {
    async submitReset (route) {
      try {
        if (this.error) {
          this.errorMsg = ''
          this.error = false
        }
        const res = await this.$axios.post(`${route}`, this.resetForm)
        this.resetMsg = res.data.msg
        this.submitted = true
      } catch (e) {
        this.errorMsg = e.response.data.msg
        this.error = true
      }
    }
  }
}
</script>

<style scoped>
</style>
