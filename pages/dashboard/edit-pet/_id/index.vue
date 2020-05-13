<template>
  <section id="edit-pet-container">
    <b-container>
      <b-row>
        <b-col cols="8" offset="2">
          <EditPetForm :pet="pet" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import EditPetForm from '~/components/EditPetForm'

export default {
  components: {
    EditPetForm
  },
  computed: {
    pet () {
      const pet = this.$store.getters['pets/getSelectedPet'](this.$route.params.id)
      return pet[0]
    }
  }
}
</script>

<style scoped>
</style>
