<template>
  <section id="all-cats-container">
    <b-container>
      <h1 class="text-center py-3">All Cats Looking For A New Home</h1>
      <b-row>
        <b-col v-for="cat in cats" :key="cat._id" md="4">
          <AllPetCards
            route="cats/"
            :pet="cat"
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
    cats () {
      return this.$store.getters['pets/getAllSelectedSpecies']('cat')
    }
  },
  head () {
    return {
      title: 'Cats For Adoption',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'List of all cats looking for a new home'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
