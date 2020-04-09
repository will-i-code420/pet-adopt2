<template>
  <section id="all-cats-container">
    <b-container>
      <h1 class="text-center py-3">All Cats Looking For A New Home</h1>
      <b-row>
        <b-col v-for="cat in cats" :key="cat.id" md="4">
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
  data () {
    return {
      cats: [
        {
          id: 1,
          name: 'Furry',
          age: 2,
          breed: 'Calico',
          description: 'Sweet cat who loves treats.  She does not play well with other kitties'
        },
        {
          id: 2,
          name: 'Mrs. Kitty',
          age: 1,
          breed: 'Himalyan',
          description: 'Curious cat who loves to explore everywhere.  Loves treats and hanging out'
        },
        {
          id: 3,
          name: 'Garfield',
          age: 5,
          breed: 'Unknown',
          description: 'Friendly cat who is friends with dogs and all creatures'
        },
        {
          id: 4,
          name: 'Bob',
          age: 10,
          breed: 'Calico',
          description: 'In his golden years loves lounging in front of the window'
        }
      ]
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
