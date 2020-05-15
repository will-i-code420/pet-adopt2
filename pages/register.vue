<template>
  <section id="user-registration">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="text-center">Create User Account</h1>
        </b-col>
      </b-row>
      <b-form-row class="mb-5">
        <b-col cols="10" offset="1" class="contact-form py-3 px-5">
          <RegistrationForm />
        </b-col>
      </b-form-row>
    </b-container>
  </section>
</template>

<script>
import RegistrationForm from '~/components/forms/RegistrationForm'

export default {
  components: {
    RegistrationForm
  },
  head () {
    return {
      title: 'Pet Adopt User Registration',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Create a user account to save animals and be in contact with us whether to help, donate, or if you have animals in need of help'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
