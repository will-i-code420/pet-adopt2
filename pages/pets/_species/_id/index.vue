<template>
  <section id="single-pet-container">
    <b-container>
      <b-row>
        <b-col>
          <SinglePetCard />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import SinglePetCard from '~/components/cards/SinglePetCard'

export default {
  components: {
    SinglePetCard
  }
}
</script>

<style scoped>
</style>
