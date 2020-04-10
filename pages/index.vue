<template>
  <section id="home-container">
    <b-container class="pt-3">
      <h1 class="text-center">
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
      <b-row>
        <b-col>
        </b-col>
      </b-row>
      <b-form-row align-h="start" class="pb-3">
        <b-col cols="8" offset="2" class="contact-form py-3 px-5">
          <h3 class="text-center">
            Contact Us
          </h3>
          <b-form-group
            id="input-group-name"
            label="Your Name:"
            label-for="name"
            :state="nameVerif"
            :invalid-feedback="invalidName"
            :valid-feedback="validName"
          >
            <b-form-input
              id="name"
              v-model="contactForm.name"
              :state="nameVerif"
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-email"
            label="Your Emal:"
            label-for="email"
          >
            <b-form-input
              id="email"
              v-model="contactForm.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
          <b-form-textarea
            id="info"
            v-model="contactForm.info"
            placeholder="Enter question..."
            required
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <b-button class="form-button mt-3" @click="submitQuestion">
            Contact Us
          </b-button>
          <b-alert
            :show="error"
            variant="danger"
          >
          {{ errorMsg }}
          </b-alert>
          <b-alert
            :show="submitted"
            dismissible
            fade
            variant="success"
          >
          {{ submittedMsg }}
          </b-alert>
        </b-col>
      </b-form-row>
    </b-container>
  </section>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('pets/getPets')
  },
  computed: {
    nameVerif () {
      return this.contactForm.name.length > 4
    },
    invalidName () {
      return this.nameVerif ? '' : 'Enter Valid Name'
    },
    validName () {
      return this.nameVerif ? 'Thank You' : ''
    }
  },
  data () {
    return {
      contactForm: {
        name: '',
        email: '',
        info: ''
      },
      error: false,
      errorMsg: '',
      submitted: false,
      submittedMsg: ''
    }
  },
  methods: {
    async submitQuestion () {
      try {
        if (this.error) {
          this.error = false
          this.errorMsg = ''
        }
        const res = await this.$axios.post('/contact', this.contactForm)
        this.submittedMsg = res.data.msg
        this.clearContactForm()
        this.submitted = true
      } catch (err) {
        this.errorMsg = err
        this.error = true
      }
    },
    clearContactForm () {
      this.contactForm.name = ''
      this.contactForm.email = ''
      this.contactForm.info = ''
    }
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
}
</style>
