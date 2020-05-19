<template>
  <section id="all-pets-table">
    <h2 class="mt-2 mb-5">
      All Pets For Adoption
    </h2>
    <b-table hover :items="pets" :fields="fields">
      <template v-slot:cell(action)="data">
        <b-button variant="primary" size="sm" :to="`/dashboard/edit-pet/${data.item._id}`">
          Edit
        </b-button>
        <b-button variant="primary" size="sm" @click="markAdopted(data.item._id)">
          Mark Adopted
        </b-button>
        <b-button v-if="isAdmin" variant="primary" size="sm" @click="deletePet(data.item._id)">
          Delete
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
        { key: 'species', sortable: true },
        { key: 'dateAdded', label: 'List Date', sortable: true },
        { key: 'action' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      pets: 'pets/getUnadoptedPets',
      isAdmin: 'user/isAdmin'
    })
  },
  methods: {
    deletePet (id) {
      alert(id)
    },
    markAdopted (id) {
      try {
        alert(id)
        console.log(id)
      } catch (e) {
        console.log(e.response.data.msg)
      }
    }
  }
}
</script>

<style scoped>
</style>
