<template>
  <section id="edit-pet-container">
    <h1>Edit Pet</h1>
    <h2>{{ route.params.id }}</h2>
    <h3>{{ pet.name }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    pet: Object
  }
}
</script>

<style lang="css" scoped>
</style>
