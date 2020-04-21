<template>
  <section id="contact-container">
    <b-container class="text-center py-4">
      <b-row class="pb-3">
        <b-col>
          <h1>Contact Us Info Placeholder</h1>
        </b-col>
      </b-row>
      <b-form-row align-h="start" class="pb-3">
        <b-col cols="8" offset="2" class="contact-form py-3 px-5">
          <ContactForm :animalInquiry="false"/>
        </b-col>
      </b-form-row>
    </b-container>
  </section>
</template>

<script>
import ContactForm from '~/components/ContactForm'

export default {
  components: {
    ContactForm
  }
}
</script>

<style scoped>
</style>
