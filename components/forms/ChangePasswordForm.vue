<template>
  <section id="change-password-form">
    <Form>
      <template #form-group-1>
        <b-form-group
          id="input-group-currentPassword"
          label="Current Password:"
          label-for="currentPassword"
        >
        <b-form-input
          id="currentPassword"
          v-model="changePasswordForm.currentPassword"
          type="password"
          required
        ></b-form-input>
        </b-form-group>
      </template>
      <template #form-group-2>
        <b-form-group
          id="input-group-password"
          label="New Password:"
          label-for="password"
        >
        <b-form-input
          id="password"
          v-model="changePasswordForm.newPassword"
          type="password"
          required
        ></b-form-input>
        </b-form-group>
      </template>
      <template #form-group-3>
        <b-form-group
          id="input-group-confirmPassword"
          label="Confirm Password:"
          label-for="confirmPassword"
        >
        <b-form-input
          id="confirmPassword"
          v-model="cpassword"
          type="password"
          required
        ></b-form-input>
        </b-form-group>
      </template>
      <template #btn>
        <b-button variant="primary" class="my-3 mr-3" @click="submitPasswordChange">
          Submit
        </b-button>
      </template>
    </Form>
  </section>
</template>

<script>
export default {
  name: 'ChangePasswordForm',
  data () {
    return {
      changePasswordForm: {
        currentPassword: '',
        newPassword: ''
      },
      cpassword: ''
    }
  },
  methods: {
    checkPassword () {
      return this.changePasswordForm.newPassword === this.cpassword
    },
    async submitPasswordChange () {
      const payload = {
        id: this.$route.params.id,
        passwordForm: this.changePasswordForm
      }
      if (!this.checkPassword()) {
        const errorPayload = {
          status: 'error',
          msg: 'New Password Does Not Match Confirm Password'
        }
        return this.$store.dispatch('messages/setMsgStatus', errorPayload)
      }
      await this.$store.dispatch('user/changePassword', payload)
      this.clearPasswordForm()
      // this.$emit('pass-submitted')
    },
    clearPasswordForm () {
      this.changePasswordForm.currentPassword = ''
      this.changePasswordForm.newPassword = ''
      this.cpassword = ''
    }
  }
}
</script>

<style scoped>
</style>
