<template lang="html">
  <Form>
    <template #form-group-1>
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
    </template>
    <template #btn1>
      <b-button variant="primary" class="mt-3 px-5 py-2" @click="submitReset('/resetPassword')">
        Reset Password
      </b-button>
    </template>
    <template #btn2>
      <b-button variant="primary" class="mt-3 px-5 py-2" @click="submitReset('/getUsername')">
        Get Username
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
    <template #successMsg>
      <b-alert
        :show="submitted"
        dismissible
        fade
        variant="success"
      >
        {{ resetMsg }}
      </b-alert>
    </template>
  </Form>
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
