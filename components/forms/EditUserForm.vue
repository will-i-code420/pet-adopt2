<template>
  <section id="edit-user-form">
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
          required
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
          required
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
          required
          :placeholder="user.email"
        ></b-form-input>
        </b-form-group>
      </template>
      <template #form-group-4>
        <b-form-group
          id="input-group-password"
          label="Old Password:"
          label-for="old-password"
        >
        <b-form-input
          id="old-password"
          v-model="editUserForm.oldPassword"
          type="password"
          required
        ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-password"
          label="New Password:"
          label-for="password"
        >
        <b-form-input
          id="password"
          v-model="editUserForm.newPassword"
          type="password"
          required
        ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-password"
          label="Confirm New Password:"
          label-for="password"
        >
        <b-form-input
          id="password"
          v-model="password2"
          type="password"
          required
        ></b-form-input>
        </b-form-group>
      </template>
      <template #btn1>
        <b-button variant="primary" class="my-3 mr-3" @click="submitProfileEdit">
          Submit
        </b-button>
      </template>
    </Form>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'EditUserForm',
  computed: {
    ...mapGetters({
      user: 'user/getAllUserInfo'
    })
  },
  data () {
    return {
      editUserForm: {
        id: this.$route.params.id,
        name: '',
        username: '',
        email: '',
        oldPassword: '',
        newPassword: ''
      },
      password2: ''
    }
  },
  methods: {
    checkPassword () {
      return this.editUserForm.newPassword === this.password2
    },
    async submitProfileEdit () {
      if (!this.checkPassword()) {
        const payload = {
          status: 'error',
          msg: 'New Password does not match Confirm Password!'
        }
        return this.$store.disptach('messages/setMsgStatus', payload)
      }
      await this.$store.dispatch('user/updateInfo', this.editUserForm)
      await this.clearEditUserForm()
      this.$emit('edit-submitted')
    },
    clearEditUserForm () {
      this.editUserForm.name = ''
      this.editUserForm.username = ''
      this.editUserForm.email = ''
      this.editUserForm.oldPassword = ''
      this.editUserForm.newPassword = ''
      this.password2 = ''
    }
  }
}
</script>

<style scoped>
</style>
