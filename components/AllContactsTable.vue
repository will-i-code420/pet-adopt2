<template>
  <section id="all=contacts-container">
    <b-table hover :items="allContacts">
    </b-table>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AllContactsTable',
  computed: {
    ...mapState({
      allContacts: state => state.contacts.contacts
    })
  }
}
</script>

<style scoped>
</style>
