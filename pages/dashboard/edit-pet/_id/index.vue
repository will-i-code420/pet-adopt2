<template>
  <section id="edit-pet-container">
    <b-container>
      <b-row>
        <b-col cols="8" offset="2">
          <EditPetForm />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import EditPetForm from '~/components/forms/EditPetForm'

export default {
  components: {
    EditPetForm
  },
  head () {
    return {
      title: 'Adopt-A-Pet Editing Pet',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Edit current pet information'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
