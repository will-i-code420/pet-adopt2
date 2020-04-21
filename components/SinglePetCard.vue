<template>
  <section id="single-pet-container">
    <h1 class="my-3 text-center">Say Hello To {{pet.name}}</h1>
    <b-card no-body class="overflow-hidden mb-4 text-center">
    <b-row no-gutters align-v="center">
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <b-card-text>
            <h2 class="mb-3">{{pet.name}} is a {{pet.breed}}</h2>
            <hr/>
            <h3>Age: {{pet.age}}</h3>
            <hr/>
            <h4>{{pet.description}}</h4>
            <hr/>
            <p>
              <strong>Special Notes</strong>
            <ul class="special-notes">
              <li v-for="(note, index) in pet.notes" :key="index">{{note}}</li>
            </ul>
            </p>
          </b-card-text>
          <b-button variant="primary" class="my-3" @click="activatePetInquiry">
            I'm Interested
          </b-button>
        </b-card-body>
      </b-col>
    </b-row>
    </b-card>
    <ContactForm v-if="sendAnimalInquiry" :animalInquiry="true" :pet="pet"/>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ContactForm from '~/components/ContactForm'

export default {
  name: 'SinglePetCard',
  components: {
    ContactForm
  },
  mounted () {
    const payload = {
      species: this.$route.name,
      id: this.$route.params.id
    }
    this.$store.dispatch('pets/getSinglePet', payload)
  },
  computed: {
    ...mapState({
      pet: state => state.pets.currentPet
    })
  },
  data () {
    return {
      sendAnimalInquiry: false
    }
  },
  methods: {
    activatePetInquiry () {
      this.sendAnimalInquiry = true
    }
  }
}
</script>

<style scoped>
.special-notes {
  display: flex;
  justify-content: space-around;
}
</style>
