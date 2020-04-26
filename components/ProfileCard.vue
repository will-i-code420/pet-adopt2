<template>
  <h2>{{ user.email }}</h2>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    user: Object
  }
}
</script>

<style scoped>
</style>
