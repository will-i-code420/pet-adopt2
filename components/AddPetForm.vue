<template>
  <section id="add-pet-container">
    <h3 class="my-3">
      Add New Pet
    </h3>
    <b-form class="mx-5">
      <b-form-group label="Animal Type">
      <b-form-checkbox-group
        v-model="animal"
        :options="animalOptions"
        name="animal type"
      ></b-form-checkbox-group>
    </b-form-group>
      <b-form-group
        id="input-group-name"
        label="Pet Name:"
        label-for="name"
      >
      <b-form-input
        id="name"
        v-model="newPetForm.name"
        type="text"
        required
        placeholder="Animal Name"
      ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-breed"
        label="Pet Breed:"
        label-for="name"
      >
      <b-form-input
        id="breed"
        v-model="newPetForm.breed"
        type="text"
        required
        placeholder="Animal Breed"
      ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-age"
        label="Pet Age:"
        label-for="age"
      >
      <b-form-input
        id="age"
        v-model.number="newPetForm.age"
        type="number"
        required
        placeholder="Animal Age"
      ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-notes"
        label="Special Notes:"
        label-for="notes"
      >
      <b-form-input
        id="notes"
        v-model="newPetForm.notes"
        type="text"
        required
        placeholder="Any meds, conditions, etc..."
      ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-description"
        label="Pet Description:"
        label-for="description"
      >
      <b-form-textarea
        id="description"
        v-model="newPetForm.description"
        placeholder="Enter description..."
        required
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      </b-form-group>
      <b-button variant="primary" class="my-3 px-5 py-2" @click="addNewPet">
        Add Pet
      </b-button>
      <b-alert
        :show="error"
        variant="danger"
      >
        {{ errorMsg }}
      </b-alert>
      <b-alert
        :show="submitted"
        dismissible
        fade
        variant="success"
      >
        {{ submittedMsg }}
      </b-alert>
    </b-form>
  </section>
</template>

<script>
export default {
  name: 'AddPetForm',
  data () {
    return {
      animal: [],
      animalOptions: [
        { text: 'Cat', value: '/cats' },
        { text: 'Dog', value: '/dogs' }
      ],
      newPetForm: {
        name: '',
        breed: '',
        age: Number(),
        description: '',
        notes: ''
      },
      error: false,
      errorMsg: '',
      submitted: false,
      submittedMsg: ''
    }
  },
  methods: {
    async addNewPet () {
      const payload = {
        route: this.animal,
        petForm: this.newPetForm
      }
      try {
        if (this.error) {
          this.error = false
          this.errorMsg = ''
        }
        await this.$store.dispatch('pets/addNewPet', payload)
        this.submitted = true
        this.submittedMsg = `${this.newPetForm.name} has been added`
        this.clearPetForm()
      } catch (e) {
        this.error = true
        this.errorMsg = e.response.data.msg
      }
    },
    clearPetForm () {
      this.animal = []
      this.newPetForm.name = ''
      this.newPetForm.breed = ''
      this.newPetForm.age = Number()
      this.newPetForm.description = ''
      this.newPetForm.notes = ''
    }
  }
}
</script>

<style scoped>
#add-pet-container {
  border: 2px solid black;
}
</style>
