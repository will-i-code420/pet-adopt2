<template>
  <section id="all-pets-table">
    <b-table hover :items="allPets" :fields="fields">
      <template v-slot:cell(action)="data">
        <b-button variant="primary" size="sm" :to="'dashboard/edit-pet/' + data.item._id">
          Edit
        </b-button>
        <b-button variant="primary" size="sm" @click="markAdopted(data.item)">
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
        { key: 'dateAdded', label: 'List Date', sortable: true },
        { key: 'action' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      allPets: 'pets/getUnadoptedPets',
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
