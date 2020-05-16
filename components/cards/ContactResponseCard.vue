<template>
  <b-card
    :title="'Responding to: ' + contact.name"
  >
  <b-list-group flush>
    <b-list-group-item>
      Email: {{ contact.email }}
    </b-list-group-item>
    <b-list-group-item>
      Question: {{ contact.info }}
    </b-list-group-item>
    <b-list-group-item v-if="contact.petId !== 'none'">
      Interest PetID: {{ contact.petId }}
    </b-list-group-item>
  </b-list-group>
    <b-form @submit.prevent="sendResponse" class="mt-2">
      <b-form-group
        id="input-group-response"
        label="Input Response:"
        label-for="response"
      >
      <b-form-textarea
        id="response"
        v-model="responseForm.info"
        placeholder="Enter response..."
        required
        rows="3"          max-rows="6"
      ></b-form-textarea>
      </b-form-group>
      <b-button variant="primary" @click="sendResponse">
        Send Response
      </b-button>
    </b-form>
  </b-card>
</template>

<script>
export default {
  name: 'ContactResponseCard',
  props: {
    contact: Object
  },
  data () {
    return {
      responseForm: {
        info: ''
      }
    }
  },
  methods: {
    sendResponse () {
      alert(`sending response to ${this.contact.email}`)
    }
  }
}
</script>

<style scoped>
</style>
