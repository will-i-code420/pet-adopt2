<template>
  <section id="dashboard-container" class="my-5">
    <b-container>
      <h1 class="text-center mb-3">
        Dashboard Page
      </h1>
      <b-row>
        <b-col md="4">
          <b-card>
            <b-card-text>
              {{ adoptCount }} Pets Adopted
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card>
            <b-card-text>
              {{ petCount }} Pets For Adoption
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card>
            <b-card-text>
              Contacts To Respond To
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      user: state => state.user.user
    }),
    ...mapGetters({
      petCount: 'pets/getPetsCount',
      adoptCount: 'pets/getAdoptedPetsCount'
    })
  },
  head () {
    return {
      title: 'Employee Dashboard',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Main area to manage pets, contacts and things related to Pet Adopt site'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
