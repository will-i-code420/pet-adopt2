<template>
  <section id="all=contacts-container">
    <h2 class="mt-2 mb-5">
      All Inquiries Needing Response
    </h2>
    <b-table hover :items="contacts" :fields="fields">
      <template v-slot:cell(action)="data">
        <b-button variant="primary" :to="'dashboard/inquiry-response/' + data.item._id">
          Respond
        </b-button>
      </template>
    </b-table>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AllContactsTable',
  data () {
    return {
      fields: [
        { key: 'name' },
        { key: 'email' },
        {
          key: 'petId',
          label: 'Pet Interest',
          formatter: (value, key, item) => {
            if (item.petId === 'none') {
              return 'NO'
            } else {
              return 'YES'
            }
          }
        },
        { key: 'followUpDate', label: 'Follow Up Date', sortable: true },
        { key: 'action' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      contacts: 'contacts/getAllResponseRequired'
    })
  }
}
</script>

<style scoped>
</style>
