<template>
  <section>
    <h1>Add todo item</h1>
    <form>
      <FormInput 
        label="Description of task"
        name="item"
        placeholder="please enter a description"
        @update-input="updateDescription">
      </FormInput>
      <FormDropdown 
        label="Please select a group" 
        v-bind:items="['personal', 'work']"
        name="group"
        @update-dropdown-selection="updateGroup">
        </FormDropdown>
      <FormRadio
        label="Please select a category"
        v-bind:items="[
          {
            text: 'Quick task',
            value: 'quick-task'
          },
          {
            text: 'Task',
            value: 'task'
          },
          {
            text: 'Project',
            value: 'project'
          }]"
        name="category"
        @update-radio="updateCategory"
      ></FormRadio>
      <FormInput
        label="Please enter the estimated time"
        name="estimated-time"
        placeholder="5 mins"
        @update-input="updateTime">
      </FormInput>
      <FormRadio
        label="Status"
        v-bind:items="[
          {
            text: 'Completed',
            value: 'complete'
          },
          {
            text: 'Not complete',
            value: 'not-complete'
          }]"
        name="status"
        @update-radio="updateStatus"
      ></FormRadio> 
      <button type="submit" @click="storeInState">Add new task</button>
    </form>
    <br/>
    <h2>View all todos</h2>
    <button @click="getAllTodos">Return all todos</button>

    <!-- add styles to me -->
    <ul v-if="todos.length > 0" class="divide-y divide-gray-200 rounded-full">
      <li v-for="todo in todos" :key="todo.description" class="ml-3">
        <NuxtLink :to="'/todo/'+ todo.id">
          <h3 class="text-xl">{{todo.description}}</h3>
          <!-- loop through these properties -->
          <p class="text-sm font-medium text-gray-900">Group: {{todo.group}}</p>
          <p class="text-sm font-medium text-gray-900">Category: {{todo.category}}</p>
          <p class="text-sm font-medium text-gray-500">Estimated Time: {{todo.time}}</p>
          <p class="text-sm font-medium text-gray-900">Status: {{todo.status}}</p>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'

export default {
  name: 'add-to-do',
  data(){
    return {      
      description: '',
      group: '',
      category: '',
      time: '',
      status: ''
    }
  },
  computed: {
    ...mapState([
      'todos'
    ])
  },
  methods: {
    ...mapMutations([
      'addNewTodoItem'
    ]),
    updateDescription(value){
      this.description = value
    },
    updateTime(value){
      this.time = value
    },
    updateGroup(value){
      this.group = value
    },
    updateCategory(value){
      this.category = value
    },
    updateStatus(value){
      this.status = value
    },
    storeInState(e){
      e.preventDefault()
      const item = {
        id: Math.floor(Math.random() * 100000),
        description: this.description,
        group: this.group,
        category: this.category,
        time: this.time,
        status: this.status
      }
      this.addNewTodoItem(item)
    },
    getAllTodos(){
      console.log(this.$store.state)
    }
  }
}
</script>
