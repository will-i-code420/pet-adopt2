<template>
  <section id="single-dog-container">
    <b-container>
      <b-row>
        <b-col>
          <SinglePetCard :pet="dog" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import SinglePetCard from '~/components/SinglePetCard'

export default {
  components: {
    SinglePetCard
  },
  computed: {
    dog () {
      const dog = this.$store.getters['pets/getSelectedPet'](this.$route.params.id)
      return dog[0]
    }
  }
}
</script>

<style scoped>
</style>
