<template>
  <b-container fluid class="mt-2 mb-5">
    <b-row>
      <b-col>
        <b-img class="hero-img" src="~/static/hero-img.jpg" fluid alt="two boston terriers laying on couch" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero-img {
  height: 110vh;
  width: 100%;
  object-fit: cover;
}
</style>
