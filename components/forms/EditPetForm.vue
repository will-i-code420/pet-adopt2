<template>
  <Form>
    <template #title>
      <h3>
        Editing {{ pet.name }}
      </h3>
    </template>
    <template #form-group-1>
      <b-form-group label="Animal Species">
        <b-form-radio-group
          id="species"
          v-model="editPetForm.species"
          :options="animalOptions"
          name="species-options"
          required
        ></b-form-radio-group>
      </b-form-group>
    </template>
    <template #form-group-2>
      <b-form-group label="Animal Gender">
        <b-form-radio-group
          id="gender"
          v-model="editPetForm.gender"
          :options="genderOptions"
          name="gender-options"
          required
        ></b-form-radio-group>
      </b-form-group>
    </template>
    <template #form-group-3>
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
    </template>
    <template #form-group-4>
      <b-form-group
        id="input-group-breed"
        label="Pet Breed:"
        label-for="breed"
      >
      <b-form-input
        id="breed"
        v-model="editPetForm.breed"
        type="text"
        required
        placeholder="Animal Breed"
      ></b-form-input>
      </b-form-group>
    </template>
    <template #form-group-5>
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
    </template>
    <template #form-group-6>
      <b-form-group
        id="input-group-age"
        label="Pet Weight:"
        label-for="weight"
      >
      <b-form-input
        id="weight"
        v-model.number="editPetForm.weight"
        type="number"
        required
        placeholder="Animal Age"
      ></b-form-input>
      </b-form-group>
    </template>
    <template #form-group-7>
      <div class="special-notes-container">
        <p>Special Notes:</p>
        <b-button variant="primary" class="my-3 px-5 py-2" @click="addNewNote">
          New Note
        </b-button>
        <b-row v-show="addingNewNote">
          <b-col offset="2">
            <b-form inline>
              <b-input-group prepend="New Note">
                <b-form-input
                  id="notes"
                  class="mr-3"
                  v-model="newNote"
                  type="text"
                  ></b-form-input>
              </b-input-group>
              <b-button variant="primary" class="px-2 py-2 mr-2" @click="saveNewNote">
                Save
              </b-button>
              <b-button variant="danger" class="py-2" @click="cancelNewNote">
                X
              </b-button>
            </b-form>
          </b-col>
        </b-row>
        <ul class="special-notes">
          <li v-show="!editingNote" class="my-3" v-for="(note, index) in editPetForm.notes" :key="index">
            {{note}}
            <b-button variant="primary" @click="editNote(index, note)">
              Edit
            </b-button>
            <b-button variant="danger" @click="deleteNote(index)">
              X
            </b-button>
          </li>
          <b-row v-show="editingNote">
            <b-col offset="3">
              <b-form inline>
                <b-form-input
                  id="notes"
                  class="mr-3"
                  v-model="newNote"
                  type="text"
                ></b-form-input>
                <b-button variant="primary" class="px-2 py-2 mr-2" @click="saveNoteEdit">
                  Save
                </b-button>
                <b-button variant="danger" class="py-2" @click="cancelNoteEdit">
                  X
                </b-button>
              </b-form>
            </b-col>
          </b-row>
        </ul>
      </div>
    </template>
    <template #form-group-8>
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
    </template>
    <template #btn1>
      <b-button variant="primary" class="my-3 px-5 py-2" @click="submitPetEdits">
        Submit Changes
      </b-button>
    </template>
    <template #errorMsg>
      <b-alert
        :show="error"
        variant="danger"
      >
        {{ errorMsg }}
      </b-alert>
    </template>
    <template #successMsg>
      <b-alert
        :show="submitted"
        dismissible
        fade
        variant="success"
      >
        {{ submittedMsg }}
      </b-alert>
    </template>
  </Form>
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
        { text: 'Cat', value: 'cats' },
        { text: 'Dog', value: 'dogs' }
      ],
      genderOptions: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' }
      ],
      editPetForm: {
        name: this.pet.name,
        breed: this.pet.breed,
        gender: this.pet.gender,
        age: this.pet.age,
        weight: this.pet.weight,
        description: this.pet.description,
        species: this.pet.species,
        notes: this.pet.notes
      },
      addingNewNote: false,
      editingNote: false,
      noteIndex: 0,
      newNote: '',
      error: false,
      errorMsg: '',
      submitted: false,
      submittedMsg: ''
    }
  },
  methods: {
    async submitPetEdits () {
      const payload = {
        id: this.pet._id,
        petUpdateForm: this.editPetForm
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
    addNewNote () {
      this.addingNewNote = !this.addingNewNote
    },
    editNote (index, note) {
      this.newNote = note
      this.noteIndex = index
      this.editingNote = !this.editingNote
    },
    cancelNoteEdit () {
      this.newNote = ''
      this.noteIndex = 0
      this.editingNote = false
    },
    saveNoteEdit () {
      this.editPetForm.notes[this.noteIndex] = this.newNote
      this.cancelNoteEdit()
    },
    saveNewNote () {
      const newNoteList = [...this.editPetForm.notes, this.newNote]
      this.newNote = ''
      this.editPetForm.notes = newNoteList
      this.addingNewNote = !this.addingNewNote
    },
    cancelNewNote () {
      this.addingNewNote = !this.addingNewNote
      this.newNote = ''
    }
  }
}
</script>

<style scoped>

</style>
