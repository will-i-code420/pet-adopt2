<template>
  <section id="all=contacts-container">
    <b-table hover :items="allContacts" :fields="fields">
      <template v-slot:cell(action)="data">
        <b-button variant="primary" :to="'dashboard/inquiry-response/' + data.item._id">
          Respond
        </b-button>
      </template>
    </b-table>
  </section>
</template>

<script>
import { mapState } from 'vuex'

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
    ...mapState({
      allContacts: state => state.contacts.contacts.filter(contact => contact.followUpRequired === true)
    })
  }
}
</script>

<style scoped>
</style>
