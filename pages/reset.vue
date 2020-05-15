<template>
  <section id="user-reset">
    <b-container>
      <b-row class="my-3">
        <b-col>
          <h1 class="text-center">
            Forgot Username/Password Reset
          </h1>
        </b-col>
      </b-row>
      <b-form-row>
        <b-col cols="8" offset="2" class="contact-form py-3 px-5">
          <ResetForm />
        </b-col>
      </b-form-row>
    </b-container>
  </section>
</template>

<script>
import ResetForm from '~/components/forms/ResetForm'

export default {
  components: {
    ResetForm
  },
  data () {
    return {
      forgotUsername: false
    }
  },
  head () {
    return {
      title: 'Pet Adopt User Account Reset',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Forgot your password or username, complete the form and we\'ll email you a new password or your forgotten username'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
