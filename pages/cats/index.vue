<template>
  <section id="all-cats-container">
    <b-container>
      <b-row>
        <b-col>
          <h1>All Cats Page</h1>
          <PetTable
            species="Cats"
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
