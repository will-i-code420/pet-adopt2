<template>
  <div class="success-msg-container">
    <b-alert
      :show="success"
      fade
      variant="success"
    >
      {{ successMsg }}
    </b-alert>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SuccessMsg',
  computed: {
    ...mapGetters({
      success: 'messages/getSuccessStatus',
      successMsg: 'messages/getSuccessMsg'
    })
  }
}
</script>

<style lang="css" scoped>
</style>
