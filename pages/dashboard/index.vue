<template>
  <section id="dashboard-container">
    <h1>Dashboard Page</h1>
    <h2>{{ user.username }}</h2>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      user: state => state.user.user
    })
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
