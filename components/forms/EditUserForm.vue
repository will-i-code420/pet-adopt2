<template>
  <section id="edit-user-info-form">
    <Form>
      <template #form-group-1>
        <b-form-group
          id="input-group-name"
          label="Name:"
          label-for="name"
        >
        <b-form-input
          id="name"
          v-model="editUserForm.name"
          type="text"
          :placeholder="user.name"
        ></b-form-input>
        </b-form-group>
      </template>
      <template #form-group-2>
        <b-form-group
          id="input-group-username"
          label="Username:"
          label-for="username"
        >
        <b-form-input
          id="username"
          v-model="editUserForm.username"
          type="text"
          :placeholder="user.username"
        ></b-form-input>
        </b-form-group>
      </template>
      <template #form-group-3>
        <b-form-group
          id="input-group-email"
          label="Email Address:"
          label-for="email"
        >
        <b-form-input
          id="email"
          v-model="editUserForm.email"
          type="email"
          :placeholder="user.email"
        ></b-form-input>
        </b-form-group>
      </template>
      <template #btn1>
        <b-button variant="primary" class="my-3 mr-3" @click="submitProfileEdit">
          Submit Changes
        </b-button>
      </template>
    </Form>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'EditUserInfoForm',
  computed: {
    ...mapGetters({
      user: 'user/getAllUserInfo'
    })
  },
  data () {
    return {
      editUserForm: {
        name: '',
        username: '',
        email: ''
      }
    }
  },
  methods: {
    async submitProfileEdit () {
      const payload = {
        id: this.$route.params.id,
        userUpdateForm: this.editUserForm
      }
      await this.checkForm()
      await this.$store.dispatch('user/updateInfo', payload)
      await this.clearEditUserForm()
    },
    checkForm () {
      if (this.editUserForm.name === '') {
        this.editUserForm.name = this.user.name
      }
      if (this.editUserForm.username === '') {
        this.editUserForm.username = this.user.username
      }
      if (this.editUserForm.email === '') {
        this.editUserForm.email = this.user.email
      }
    },
    clearEditUserForm () {
      this.editUserForm.name = ''
      this.editUserForm.username = ''
      this.editUserForm.email = ''
    }
  }
}
</script>

<style scoped>
</style>
