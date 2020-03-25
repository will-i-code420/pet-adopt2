<template>
  <section id="pet-table-container">
    <h1>{{ species }} Looking For New Homes</h1>
    <b-card
      v-for="pet in pets"
      :key="pet.id"
      :title="pet.name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        <p>{{ pet.breed }}</p>
        <p>{{ pet.age }}</p>
        <p>{{ pet.description }}</p>
      </b-card-text>
    <nuxt-link :to="route + pet.id" variant="primary">Go somewhere</nuxt-link>
    </b-card>
  </section>
</template>

<script>
export default {
  name: 'AllPetCards',
  props: {
    species: String,
    route: String,
    pets: Array
  }
}
</script>

<style scoped>
</style>
