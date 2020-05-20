<template>
  <article id="employee-form">
    <Form>
      <template #title>
        <h1 class="my-3 text-center">
          Adding New Employee
        </h1>
      </template>
      <template #form-group-1>
        <b-form-group label="Role" label-for="role">
          <b-form-radio-group
            id="role"
            v-model="newUserForm.role"
            :options="roleOptions"
            name="role-options"
            required
          ></b-form-radio-group>
        </b-form-group>
      </template>
      <template #form-group-2>
        <b-form-group
          id="input-group-name"
          label="Employee Name:"
          label-for="name"
        >
        <b-form-input
          id="name"
          v-model="newUserForm.name"
          type="text"
          required
          placeholder="Full Name"
        ></b-form-input>
        </b-form-group>
      </template>
      <template #form-group-3>
        <b-form-group
          id="input-group-username"
          label="Username:"
          label-for="username"
        >
        <b-form-input
          id="username"
          v-model="newUserForm.username"
          type="text"
          required
          placeholder="Username"
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
          v-model="newUserForm.email"
          type="text"
          required
          placeholder="example@mail.com"
        ></b-form-input>
        </b-form-group>
      </template>
      <template #btn1>
        <b-button variant="primary" class="my-3 px-5 py-2" @click="addEmployee">
          Add Pet
        </b-button>
      </template>
    </Form>
  </article>
</template>

<script>
export default {
  name: 'AddEmployeeForm',
  data () {
    return {
      roleOptions: [
        { text: 'Admin', value: 'admin' },
        { text: 'Employee', value: 'employee' },
        { text: 'User', value: 'user' },
      ],
      newUserForm: {
        role: 'employee',
        name: '',
        username: '',
        email: ''
      }
    }
  }
}
</script>

<style scoped>
</style>
