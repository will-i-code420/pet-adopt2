<template>
  <section id="edit-pet-container" class="my-5 text-center">
    <h3 class="my-3">
      Edit {{ pet.name }}
    </h3>
    <b-form class="mx-5">
      <b-form-group label="Animal Species">
        <b-form-radio-group
          id="species"
          v-model="editPetForm.species"
          :options="animalOptions"
          name="species-options"
          required
        ></b-form-radio-group>
      </b-form-group>
      <b-form-group
        id="input-group-name"
        label="Pet Name:"
        label-for="name"
      >
      <b-form-input
        id="name"
        v-model="editPetForm.name"
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
        v-model="editPetForm.breed"
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
        v-model.number="editPetForm.age"
        type="number"
        required
        placeholder="Animal Age"
      ></b-form-input>
      </b-form-group>
      <div class="special-notes-container">
        <p>Special Notes:</p>
        <ul class="special-notes">
          <li class="my-3" v-for="(note, index) in editPetForm.notes" :key="index">
            {{note}}
            <b-button variant="primary" @click="editNote(index)">
              Edit
            </b-button>
            <b-button variant="danger" @click="deleteNote(index)">
              X
            </b-button>
          </li>
        </ul>
      </div>
      <b-form-group
        id="input-group-description"
        label="Pet Description:"
        label-for="description"
      >
      <b-form-textarea
        id="description"
        v-model="editPetForm.description"
        placeholder="Enter description..."
        required
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      </b-form-group>
      <b-button variant="primary" class="my-3 px-5 py-2" @click="editPet">
        Submit Changes
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
  name: 'EditPetForm',
  props: {
    pet: Object
  },
  data () {
    return {
      animalOptions: [
        { text: 'Cat', value: 'cat' },
        { text: 'Dog', value: 'dog' }
      ],
      editPetForm: {
        name: this.pet.name,
        breed: this.pet.breed,
        age: this.pet.age,
        description: this.pet.description,
        species: this.pet.species,
        notes: this.pet.notes
      },
      editingNote: false,
      newNote: '',
      error: false,
      errorMsg: '',
      submitted: false,
      submittedMsg: ''
    }
  },
  methods: {
    async editPet () {
      const payload = {
        id: this.pet._id,
        petUpdate: this.editPetForm
      }
      try {
        if (this.error) {
          this.error = false
          this.errorMsg = ''
        }
        await this.$store.dispatch('pets/updatePet', payload)
        this.submitted = true
        this.submittedMsg = `${this.pet.name} has been updated`
      } catch (e) {
        this.error = true
        this.errorMsg = e.response.data.msg
      }
    },
    deleteNote (index) {
      const newNotes = this.editPetForm.notes.filter((note, idx, arr) => arr[idx] !== arr[index])
      this.editPetForm.notes = newNotes
    },
    editNote (index) {
      this.editingNote = !this.editingNote
    }
  }
}
</script>

<style scoped>
#edit-pet-container {
  border: 2px solid black;
}
</style>
