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
      <ErrorMsg />
    </template>
    <template #successMsg>
      <SuccessMsg />
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
      }
    }
  },
  methods: {
    async submitReset (route) {
      const payload = {
        route,
        resetForm: this.resetForm
      }
      await this.$store.dispatch('user/reset', payload)
      this.resetForm.email = ''
    }
  }
}
</script>

<style scoped>
</style>
