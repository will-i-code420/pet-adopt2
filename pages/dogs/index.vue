<template>
  <section id="all-dogs-container">
    <b-container>
      <b-row>
        <b-col>
          <h1>All Dogs Page</h1>
          <PetTable
            species="Dogs"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import PetTable from '~/components/PetTable'

export default {
  components: {
    PetTable
  }
}
</script>

<style scoped>
</style>
