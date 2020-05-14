<template>
  <section id="single-cat-container">
    <b-container>
      <b-row>
        <b-col>
          <SinglePetCard :pet="cat" />
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
    cat () {
      const cat = this.$store.getters['pets/getSelectedPet'](this.$route.params.id)
      return cat[0]
    }
  }
}
</script>

<style scoped>
</style>
