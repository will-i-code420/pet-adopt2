<template>
  <section id="create-employee-container">
    <b-container>
      <b-row>
        <b-col>
          <AddEmployeeForm />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import AddEmployeeForm from '~/components/forms/AddEmployeeForm'

export default {
  components: {
    AddEmployeeForm
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
