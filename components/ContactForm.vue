<template>
  <b-form-row @submit.prevent="submitQuestion" align-h="start" class="pb-3">
    <b-col cols="8" offset="2" class="contact-form py-3 px-5">
      <h3 class="text-center">
        Contact Us
      </h3>
      <b-form-group id="input-group-name" label="Your Name:" label-for="name">
        <b-form-input
          id="name"
          v-model="contactForm.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-email" label="Your Emal:" label-for="email">
        <b-form-input
        id="email"
        v-model="contactForm.email"
        required
        placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-textarea
        id="textarea"
        v-model="contactForm.info"
        placeholder="Enter question..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-button class="form-button mt-3">Contact Us</b-button>
    </b-col>
  </b-form-row>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
</style>
