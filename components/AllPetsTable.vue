<template>
  <section id="all-pets-table">
    <b-table hover :items="allPets" :fields="fields">
      <template v-slot:cell(action)="data">
        <b-button variant="primary" size="sm" :to="'dashboard/edit-pet/' + data.item._id">
          Edit
        </b-button>
        <b-button variant="primary" size="sm" @click="deletePet(data.item._id)">
          Delete
        </b-button>
        <b-button variant="primary" size="sm" @click="markAdopted(data.item._id)">
          Mark Adopted
        </b-button>
      </template>
    </b-table>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AllPetsTable',
  data () {
    return {
      fields: [
        { key: 'name' },
        { key: 'dateAdded', label: 'List Date', sortable: true },
        { key: 'action' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      allPets: 'pets/getUnadoptedPets'
    })
  },
  methods: {
    deletePet (id) {
      alert(id)
    },
    markAdopted (id) {
      alert(id)
    }
  }
}
</script>

<style scoped>
</style>
