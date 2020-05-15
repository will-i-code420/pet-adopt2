<template>
  <main id="home-container">
    <Hero />
    <b-container>
      <h2 class="text-center mb-4">
        Find your new family friend today
      </h2>
      <b-row class="featured-pets" align-h="around" align-v="center">
        <b-col md="3">
          <h2>Featured Pets Placeholder</h2>
        </b-col>
        <b-col md="3">
          <h2>Featured Pets Placeholder</h2>
        </b-col>
        <b-col md="3">
          <h2>Featured Pets Placeholder</h2>
        </b-col>
      </b-row>
      <h2 class="text-center my-3">
        About Us
      </h2>
      <b-row>
        <b-col md="6">
          <p>A little about us placeholder.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </b-col>
        <b-col md="6">
          <p>A little about us placeholder.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </b-col>
        <nuxt-link to="/about" class="learn-more-btn mt-3">
          Learn More
        </nuxt-link>
      </b-row>
      <b-form-row align-h="start" class="pb-3 my-5">
        <b-col cols="8" offset="2" class="contact-form py-3 px-5">
          <ContactForm :animalInquiry="false"/>
        </b-col>
      </b-form-row>
    </b-container>
  </main>
</template>

<script>
import Hero from '~/components/Hero'
import ContactForm from '~/components/ContactForm'

export default {
  components: {
    Hero,
    ContactForm
  },
  created () {
    this.$store.dispatch('pets/getAllPets')
  },
  head () {
    return {
      title: 'Adopt-A-Pet Home Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'No kill animal shelter seeking forever homes for cats, dogs, and many other of man kinds best friends.  We are always looking for foster homes, donations, and volunteers'
        }
      ]
    }
  }
}
</script>

<style>
.form-button {
  display: flex;
  margin: 0 auto;
}

.contact-form {
  border: 2px solid black;
  border-radius: 10px;
}

.learn-more-btn {
  margin: 0 auto;
}
</style>
