<template>
  <section id="inquiry-response-container">
    <b-container>
      <b-row>
        <b-col cols="8" offset="2">
          <ContactResponseCard :contact="contact" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import ContactResponseCard from '~/components/ContactResponseCard'

export default {
  components: {
    ContactResponseCard
  },
  computed: {
    contact () {
      const inquiry = this.$store.getters['contacts/getSelectedContact'](this.$route.params.id)
      return inquiry[0]
    }
  }
}
</script>

<style scoped>
</style>
