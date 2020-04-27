<template>
  <section id="user-profile">
    <b-container>
      <b-row>
        <b-col cols="8" offset="2">
          <ProfileCard :user="user" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ProfileCard from '~/components/ProfileCard'

export default {
  components: {
    ProfileCard
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  head () {
    return {
      title: 'Pet Adopt User Profile',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Update or change your information, view starred pets'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
