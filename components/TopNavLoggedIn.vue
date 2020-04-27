<template>
  <b-nav-item-dropdown :text="username" right>
    <b-dropdown-item to="dashboard" class="text-center" v-if="role != user">
      Dashboard
    </b-dropdown-item>
    <b-dropdown-item :to="/profile/ + id" class="text-center">
      Profile
    </b-dropdown-item>
    <hr>
    <b-button @click="logoutUser" size="sm" class="my-2 my-sm-2 mx-auto">
      Logout
    </b-button>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: 'TopNavLoggedIn',
  props: {
    username: String,
    id: String
  },
  methods: {
    async logoutUser () {
      await this.$store.dispatch('user/logout')
    }
  }
}
</script>

<style scoped>

.btn {
  display: flex;
}
</style>
