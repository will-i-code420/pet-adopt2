<template>
  <section id="dashboard-container" class="my-5">
    <b-container  class="text-center">
      <h1 class="mb-3">
        Dashboard Page
      </h1>
      <b-row>
        <b-col md="4">
          <b-card>
            <b-card-text>
              {{ adoptCount }} Pets Adopted
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card>
            <b-card-text>
              {{ petCount }} Pets For Adoption
            </b-card-text>
            <b-button variant="primary" @click="addPet">
              Add New Pet
            </b-button>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card>
            <b-card-text>
              {{ contactCount }} Contacts Needing Responses
            </b-card-text>
            <b-button variant="primary" @click="respondContact">
              Respond To Contacts
            </b-button>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col>
          <h2>
            Place Holder for Rest Of Dashboard
          </h2>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  mounted () {
    this.$store.dispatch('contacts/getAllContacts')
  },
  data () {
    return {
      addingPet: false,
      respondingContacts: false
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    }),
    ...mapGetters({
      petCount: 'pets/getPetsCount',
      adoptCount: 'pets/getAdoptedPetsCount',
      contactCount: 'contacts/getContactCount'
    })
  },
  methods: {
    addPet () {
      alert('add a new pet form')
      this.addingPet = !this.addingPet
    },
    respondContact () {
      alert('display contacts to respond list')
      this.respondingContacts = !this.respondingContacts
    }
  },
  head () {
    return {
      title: 'Employee Dashboard',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Main area to manage pets, contacts and things related to Pet Adopt site'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
