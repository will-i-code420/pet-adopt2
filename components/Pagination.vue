<template>
  <b-pagination
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    first-text="⏮"
    prev-text="⏪"
    next-text="⏩"
    last-text="⏭"
    class="mt-4"
  >
  </b-pagination>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    rows: Number
  },
  data () {
    return {
      currentPage: 1,
      perPage: 3
    }
  }
}
</script>

<style scoped>
</style>
