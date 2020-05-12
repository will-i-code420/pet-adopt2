<template>
  <section id="edit-pet-container">
    <h1>Edit {{ pet.name }}</h1>
    <h2>{{ $route.params.id }}</h2>
  </section>
</template>

<script>
export default {
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
