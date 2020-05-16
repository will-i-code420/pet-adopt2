<template>
  <div class="form-container">
    <slot name="title">
    </slot>
    <b-form class="px-5 pb-4">
      <slot name="form-group-1">
      </slot>
      <slot name="form-group-2">
      </slot>
      <slot name="form-group-3">
      </slot>
      <slot name="form-group-4">
      </slot>
      <slot name="form-group-5">
      </slot>
      <slot name="form-group-6">
      </slot>
      <slot name="form-group-7">
      </slot>
      <slot name="form-group-8">
      </slot>
      <slot name="form-group-9">
      </slot>
      <slot name="btn1">
      </slot>
      <slot name="btn2">
      </slot>
      <slot name="errorMsg">
      </slot>
      <slot name="successMsg">
      </slot>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<style scoped>
</style>
