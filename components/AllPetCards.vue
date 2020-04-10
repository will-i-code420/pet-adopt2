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
        <p>{{ pet.description.substring(0, 75) + '...' }}</p>
      </b-card-text>
      <nuxt-link :to="route + pet._id">
        View Details
      </nuxt-link>
    </b-card>
  </section>
</template>

<script>
export default {
  name: 'AllPetCards',
  props: {
    route: String,
    pet: Object
  }
}
</script>

<style scoped>
</style>
