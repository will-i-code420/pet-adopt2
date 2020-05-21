<template>
  <section id="create-user-container">
    <b-container>
      <b-row>
        <b-col cols="8" offset="2">
          <AddUserForm />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import AddUserForm from '~/components/forms/AddUserForm'

export default {
  components: {
    AddUserForm
  },
  head () {
    return {
      title: 'Adopt-A-Pet Create New Employee',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Create New Employee Profile/Login Info'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
