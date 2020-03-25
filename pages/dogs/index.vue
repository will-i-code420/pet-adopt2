<template>
  <section id="all-dogs-container">
    <b-container>
      <b-row>
        <b-col>
          <h1>All Dogs Page</h1>
          <AllPetCards
            species="Dogs"
            route="dogs/"
            :pets="dogs"
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
      dogs: [
        {
          id: 1,
          name: 'Spike',
          age: 2,
          breed: 'Doberman',
          description: 'Large bundle of love who enjoys going for walks and playing fetch'
        },
        {
          id: 2,
          name: 'Bebe',
          age: 13,
          breed: 'Boston Terrier',
          description: 'Little princess who enjoys doing whatever her master is from laying around, cooking in the kitchen, and especially eating'
        },
        {
          id: 3,
          name: 'Gidget',
          age: 1,
          breed: 'Boston Terrier',
          description: 'A honey badger of a dog who enjoys playing for hours on end and then cuddling up for a nap'
        },
        {
          id: 4,
          name: 'Elwood',
          age: 10,
          breed: 'Airdale Terrier',
          description: 'Fiercly loyal guard dog who is a loner.  Enjoys guarding his property and playing fetch'
        }
      ]
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
