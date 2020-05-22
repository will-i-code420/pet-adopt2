<template>
  <section id="profile-container" class="my-4 text-center">
    <h1 class="my-4" v-if="!editing">
      {{ user.name }} Profile
    </h1>
    <h1 class="my-4" v-else>
      Editing {{ user.name }} Profile
    </h1>
    <b-card
      v-if="!editing"
      no-body
      img-src="https://placekitten.com/380/200"
      img-alt="Image"
      img-top
    >
      <template v-slot:header>
        <h2 class="mb-0">
          Name: {{ user.name }}
        </h2>
      </template>
      <b-list-group flush>
        <b-list-group-item>
          Username: {{ user.username }}
        </b-list-group-item>
        <b-list-group-item>
          Email: {{ user.email }}
        </b-list-group-item>
      </b-list-group>
      <b-card-body>
        <a href="#" class="card-link">
          Starred Animals
        </a>
      </b-card-body>
      <b-card-footer>
        <b-button variant="primary" class="my-3 mr-3" @click="editProfileInfo">
          Edit Info
        </b-button>
        <b-button variant="primary" class="my-3 ml-3" @click="editAvatar">
          Change Avatar
        </b-button>
      </b-card-footer>
    </b-card>
    <EditUserForm v-else @edit-submitted="editProfileInfo" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import EditUserForm from '~/components/forms/EditUserForm'

export default {
  name: 'ProfileCard',
  components: {
    EditUserForm
  },
  data () {
    return {
      editing: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getAllUserInfo'
    })
  },
  methods: {
    editProfileInfo () {
      this.editing = !this.editing
    },
    editAvatar () {
      alert('uploading new avatar')
    }
  }
}
</script>

<style scoped>
</style>
