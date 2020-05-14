<template>
  <section id="all-dogs-container">
    <b-container>
      <h1 class="text-center py-3">All Dogs Looking For A New Home</h1>
      <b-row>
        <b-col v-for="dog in dogs" :key="dog._id" md="4">
          <AllPetCards
            route="dogs/"
            :pet="dog"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import AllPetCards from '~/components/AllPetCards'

export default {
  components: {
    AllPetCards
  },
  computed: {
    dogs () {
      return this.$store.getters['pets/getAllSelectedSpecies']('dog')
    }
  },
  head () {
    return {
      title: 'Dogs For Adoption',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'List of all dogs looking for a new home'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
