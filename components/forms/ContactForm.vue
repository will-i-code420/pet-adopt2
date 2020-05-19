<template>
  <Form>
    <template #title>
      <h3 class="text-center" v-if="!animalInquiry">
        Contact Us
      </h3>
      <h3 class="text-center" v-else>
        You're Interested In {{ pet.name }}
      </h3>
    </template>
    <template #form-group-1>
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
    </template>
    <template #form-group-2>
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
    </template>
    <template #form-group-3>
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
    </template>
    <template #btn1>
      <b-button variant="primary" class="mt-3 px-5 py-2" @click="submitQuestion">
        Contact Us
      </b-button>
    </template>
  </Form>
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
        info: ''
      }
    }
  },
  methods: {
    async submitQuestion (event) {
      event.preventDefault()
      if (this.animalInquiry) {
        this.contactForm.petId = this.pet._id
      }
      await this.$store.dispatch('contacts/submitNewContact', this.contactForm)
      this.clearContactForm()
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
