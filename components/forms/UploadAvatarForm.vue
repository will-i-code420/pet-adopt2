<template>
  <Form>
    <template #btn1>
      <b-button variant="primary" class="my-3 mr-3" @click="uploadAvatar">
        Upload
      </b-button>
    </template>
  </Form>
</template>

<script>
export default {
  name: 'UploadAvatarForm'
}
</script>

<style scoped>
</style>
