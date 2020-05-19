<template>
  <section id="user-profile">
    <b-container>
      <b-row>
        <b-col cols="8" offset="2">
          <ProfileCard />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ProfileCard from '~/components/cards/ProfileCard'

export default {
  components: {
    ProfileCard
  },
  computed: {
    ...mapGetters({
      username: 'user/getUserName'
    })
  },
  head () {
    return {
      title: `Adopt-A-Pet ${this.username} Profile`,
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
