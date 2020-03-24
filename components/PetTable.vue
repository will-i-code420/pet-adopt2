<template>
  <section id="pet-table-container">
    <h1>{{ species }} Looking For New Homes</h1>
    <b-table
      striped
      hover
      :items="pets"
    >
    </b-table>
  </section>
</template>

<script>
export default {
  name: 'PetTable',
  props: {
    species: String,
    pets: Array
  }
}
</script>

<style scoped>
</style>
