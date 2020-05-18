<template>
  <header id="nav-bar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Adopt-A-Pet</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Animals" right>
            <b-dropdown-item to="/pets/cats" class="text-center">Cats</b-dropdown-item>
            <b-dropdown-item to="/pets/dogs" class="text-center">Dogs</b-dropdown-item>
            <b-dropdown-item to="/pets/all" class="text-center">All Pets</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/about">About Us</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
          <TopNavLogin v-if="!user.username" />
          <TopNavLoggedIn v-else :username="user.username" :id="user._id" :role="user.role" />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import TopNavLogin from '~/components/TopNavLogin'
import TopNavLoggedIn from '~/components/TopNavLoggedIn'

export default {
  name: 'TopNav',
  components: {
    TopNavLogin,
    TopNavLoggedIn
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  }
}
</script>

<style scoped>
</style>
