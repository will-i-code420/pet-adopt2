<template>
  <section id="add-pet-container">
    <Form>
      <template #title>
        <h3>
          Add New Pet
        </h3>
      </template>
      <template #form-group-1>
        <b-form-group label="Animal Species">
          <b-form-radio-group
            id="species"
            v-model="newPetForm.species"
            :options="animalOptions"
            name="species-options"
            required
          ></b-form-radio-group>
        </b-form-group>
      </template>
      <template #form-group-2>
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
      </template>
      <template #form-group-3>
        <b-form-group
          id="input-group-breed"
          label="Pet Breed:"
          label-for="breed"
        >
        <b-form-input
          id="breed"
          v-model="newPetForm.breed"
          type="text"
          required
          placeholder="Animal Breed"
        ></b-form-input>
        </b-form-group>
      </template>
      <template #form-group-4>
        <b-form-group label="Animal Gender">
          <b-form-radio-group
            id="gender"
            v-model="newPetForm.gender"
            :options="genderOptions"
            name="gender-options"
            required
          ></b-form-radio-group>
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
          v-model.number="newPetForm.age"
          type="number"
          required
          placeholder="Animal Age"
        ></b-form-input>
        </b-form-group>
      </template>
      <template #form-group-6>
        <b-form-group label="Special Notes">
          <b-form-radio-group
            id="special-notes"
            v-model="addSpecialNotes"
            :options="noteOptions"
            name="special-notes"
          ></b-form-radio-group>
        </b-form-group>
      </template>
      <template #form-group-7>
        <b-form-group
          id="input-group-notes"
          label="Special Notes:"
          label-for="notes"
          v-if="addSpecialNotes"
        >
        <b-form-input
          id="notes"
          v-model="specialNote"
          type="text"
          placeholder="Any meds, conditions, etc..."
        ></b-form-input>
        <b-button variant="primary" class="my-3 px-5 py-2" @click="addNote">
          Add Note
        </b-button>
        <ul class="special-notes">
          <li v-for="(note, index) in newPetForm.notes" :key="index">{{note}}</li>
        </ul>
        </b-form-group>
      </template>
      <template #form-group-8>
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
      </template>
      <template #btn1>
        <b-button variant="primary" class="my-3 px-5 py-2" @click="addNewPet">
          Add Pet
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
  </section>
</template>

<script>
export default {
  name: 'AddPetForm',
  data () {
    return {
      animalOptions: [
        { text: 'Cat', value: 'cat' },
        { text: 'Dog', value: 'dog' }
      ],
      genderOptions: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' }
      ],
      noteOptions: [
        { text: 'Yes', value: true },
        { text: 'No', value: false }
      ],
      addSpecialNotes: false,
      specialNote: '',
      newPetForm: {
        name: '',
        breed: '',
        gender: '',
        age: Number(),
        description: '',
        species: '',
        notes: []
      },
      error: false,
      errorMsg: '',
      submitted: false,
      submittedMsg: ''
    }
  },
  methods: {
    addNote () {
      this.newPetForm.notes.push(this.specialNote)
      this.specialNote = ''
    },
    async addNewPet () {
      try {
        if (this.error) {
          this.error = false
          this.errorMsg = ''
        }
        await this.$store.dispatch('pets/addNewPet', this.newPetForm)
        this.submitted = true
        this.submittedMsg = `${this.newPetForm.name} has been added`
        this.clearPetForm()
      } catch (e) {
        this.error = true
        this.errorMsg = e.response.data.msg
      }
    },
    clearPetForm () {
      this.newPetForm.name = ''
      this.newPetForm.breed = ''
      this.newPetForm.age = Number()
      this.newPetForm.description = ''
      this.newPetForm.species = ''
      this.newPetForm.notes = []
    }
  }
}
</script>

<style scoped>
#add-pet-container {
  border: 2px solid black;
}
.special-notes {
  display: flex;
  justify-content: space-around;
}
</style>
