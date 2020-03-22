<template>
  <section id="home-container">
    <b-container class="pt-3">
      <h1 class="text-center">
        Pet Adopt
      </h1>
      <b-row>
        <b-col>
          <b-img class="hero-img" src="~/static/hero-img.jpg" fluid alt="two boston terriers laying on couch" />
        </b-col>
      </b-row>
      <h2 class="text-center py-5">
        Find your new family friend today
      </h2>
      <b-row>
        <b-col>
        </b-col>
      </b-row>
      <h3 class="text-center py-3">
        Contact Us
      </h3>
      <b-form-row @submit.prevent="submitQuestion" align-h="start">
        <b-col cols="8" offset="2">
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
          <b-button class="form-button my-3">Contact Us</b-button>
        </b-col>
      </b-form-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        info: ''
      }
    }
  },
  head() {
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
</style>
