<template>
  <section id="pet-card-container">
    <h1>Individual Pet Card</h1>
    <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Pet Info">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
    </b-card>
  </section>
</template>

<script>
export default {
  name: 'PetCard'
}
</script>

<style scoped>
</style>
