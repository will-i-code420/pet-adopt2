<template>
  <section id="all-pets-container">
    <b-card
      :title="pet.name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 25rem;"
      class="mb-4 text-center"
    >
      <b-card-text>
        <p>Breed: {{ pet.breed }}</p>
        <p>Age: {{ pet.age }}</p>
        <p>{{ pet.description }}</p>
      </b-card-text>
      <nuxt-link :to="route + pet.id" variant="primary">View</nuxt-link>
    </b-card>
  </section>
</template>

<script>
export default {
  name: 'AllPetCards',
  props: {
    route: String,
    pet: Array
  }
}
</script>

<style scoped>
</style>
