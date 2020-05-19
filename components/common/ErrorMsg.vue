<template>
  <div class="success-msg-container">
    <b-alert
      :show="error"
      variant="danger"
      class="text-center"
    >
      {{ errorMsg }}
    </b-alert>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ErrorMsg',
  computed: {
    ...mapGetters({
      error: 'messages/getErrorStatus',
      errorMsg: 'messages/getErrorMsg'
    })
  }
}
</script>

<style scoped>
</style>
