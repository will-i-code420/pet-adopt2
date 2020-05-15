<template>
  <b-form align-h="start" class="pb-3">
    <h3 class="text-center" v-if="!animalInquiry">
      Contact Us
    </h3>
    <h3 class="text-center" v-else>
      You're Interested In {{ pet.name }}
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
      required
      :state="nameVerif"
      placeholder="Enter name"
    ></b-form-input>
    </b-form-group>
    <b-form-group
      id="input-group-email"
      label="Your Email:"
      label-for="email"
    >
    <b-form-input
      id="email"
      v-model="contactForm.email"
      type="email"
      required
      placeholder="example@email.com"
    ></b-form-input>
    </b-form-group>
    <b-form-group
      id="input-group-question"
      label="Question/Details:"
      label-for="info"
    >
    <b-form-textarea
      id="info"
      v-model="contactForm.info"
      placeholder="Enter question..."
      required
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    </b-form-group>
    <b-button variant="primary" class="mt-3 px-5 py-2" @click="submitQuestion">
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
  </b-form>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    animalInquiry: Boolean,
    pet: Object
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
        info: '',
        petId: ''
      },
      error: false,
      errorMsg: '',
      submitted: false,
      submittedMsg: ''
    }
  },
  methods: {
    async submitQuestion (event) {
      event.preventDefault()
      try {
        if (this.error) {
          this.error = false
          this.errorMsg = ''
        }
        if (this.animalInquiry) {
          this.contactForm.petId = this.pet._id
        }
        const res = await this.$axios.post('/contact', this.contactForm)
        this.submitted = true
        this.submittedMsg = res.data.msg
        this.clearContactForm()
      } catch (err) {
        this.error = true
        this.errorMsg = err.response.data.msg
      }
    },
    clearContactForm () {
      this.contactForm.name = ''
      this.contactForm.email = ''
      this.contactForm.info = ''
      this.contactForm.animalId = null
    }
  }
}
</script>

<style scoped>
.btn {
  display: flex;
  margin: 0 auto;
}
</style>
