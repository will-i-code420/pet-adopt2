<template>
  <b-form>
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
    <slot name="submitBtn">
    </slot>
    <slot name="errorMsg">
    </slot>
    <slot name="successMsg">
    </slot>
  </b-form>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<style scoped>
</style>
