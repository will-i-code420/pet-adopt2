<template>
  <section id="home-container">
    <b-container class="pt-3">
      <h1 class="text-center pb-1">
        Adopt-A-Pet
      </h1>
      <b-row>
        <b-col>
          <b-img class="hero-img" src="~/static/hero-img.jpg" fluid alt="two boston terriers laying on couch" />
        </b-col>
      </b-row>
      <h2 class="text-center py-5">
        Find your new family friend today
      </h2>
      <b-row class="featured-pets mb-3">
        <b-col md="4">
          <h2>Featured Pets Placeholder</h2>
        </b-col>
        <b-col md="4">
          <h2>Featured Pets Placeholder</h2>
        </b-col>
        <b-col md="4">
          <h2>Featured Pets Placeholder</h2>
        </b-col>
      </b-row>
      <b-form-row align-h="start" class="pb-3">
        <b-col cols="8" offset="2" class="contact-form py-3 px-5">
          <ContactForm />
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
  },
  created () {
    this.$store.dispatch('pets/getPets')
  },
  head () {
    return {
      title: 'Pet Adopt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'No kill animal shelter seeking forever homes for cats and dogs'
        }
      ]
    }
  }
}
</script>

<style>
.hero-img {
  height: 90vh;
  width: 100%;
  object-fit: cover;
}

.form-button {
  display: flex;
  margin: 0 auto;
}

.contact-form {
  border: 2px solid black;
  border-radius: 10px;
}
</style>
