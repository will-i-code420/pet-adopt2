<template>
  <section id="single-cat-container">
    <b-container>
      <b-row>
        <b-col>
          <PetCard />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import PetCard from '~/components/PetCard'

export default {
  components: {
    PetCard
  }
}
</script>

<style scoped>
</style>
