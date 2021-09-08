<template>
  <main>
    <div>
     <h3 class="text-xl">{{todo.description}}</h3>
      <button @click="showEditDescription">Edit</button>
      <div v-if="editDescription">
        <FormInput 
          label="Description of task"
          name="item"
          placeholder="please enter a description"
          @update-input="updateDescription">
        </FormInput>
        <button @click="saveUpdatedDescription">Save</button>
      </div>
    </div>
    <br/>
    <div>
      <p class="text-sm font-medium text-gray-900">Group: {{todo.group}}</p>
      <button @click="showEditGroup">Edit</button>
      <div v-if="editGroup">
        <FormDropdown 
          label="Please select a group" 
          v-bind:items="['personal', 'work']"
          name="group"
          @update-dropdown-selection="updateGroup">
        </FormDropdown>
        <button @click="saveUpdatedGroup">Save</button>
      </div>
    </div>
    <br/>
    <div>
      <p class="text-sm font-medium text-gray-900">Category: {{todo.category}}</p>
      <button @click="showEditCategory">Edit</button>
      <div v-if="editCategory">
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
        <button @click="saveUpdatedCategory">Save</button>
      </div>
    </div>
    <br/>
    <div>
      <p class="text-sm font-medium text-gray-500">Estimated Time: {{todo.time}}</p>
      <button @click="showEditTime">Edit</button>
      <div v-if="editTime">
        <FormInput
          label="Please enter the estimated time"
          name="estimated-time"
          placeholder="5 mins"
          @update-input="updateTime">
        </FormInput>
        <button @click="saveUpdatedTime">Save</button>
      </div>
    </div>
    <br/>
    <div>
      <p class="text-sm font-medium text-gray-900">Status: {{todo.status}}</p>
      <button @click="showEditStatus">Edit</button>
      <div v-if="editStatus">
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
        <button @click="saveUpdatedStatus">Save</button>
      </div>
    </div>
    <p class="text-sm font-medium text-gray-900">ID: {{todo.id}}</p>
    <br/>
  </main>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'unique-todo',
  mounted(){
    console.log(this.numberOfTodos) // works 
    this.todo = this.getSingleItem(this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      numberOfTodos: 'numberOfTodos',
      getSingleItem: 'getSingleItem'
    })
  },
  methods: {
    ...mapMutations([
      'addNewTodoItem'
    ]),
    saveUpdatedDescription(e){
      e.preventDefault()
      const item = {
        id: this.todo.id,
        description: this.description,
        group: this.todo.group,
        category: this.todo.category,
        time: this.todo.time,
        status: this.todo.status
      }
      this.addNewTodoItem(item)
    },
    saveUpdatedGroup(e){
      e.preventDefault()
      const item = {
        id: this.todo.id,
        description: this.todo.description,
        group: this.group,
        category: this.todo.category,
        time: this.todo.time,
        status: this.todo.status
      }
      this.addNewTodoItem(item)
    },
    saveUpdatedCategory(e){
      e.preventDefault()
      const item = {
        id: this.todo.id,
        description: this.todo.description,
        group: this.todo.group,
        category: this.category,
        time: this.todo.time,
        status: this.todo.status
      }
      this.addNewTodoItem(item)
    },
    saveUpdatedTime(e){
      e.preventDefault()
      const item = {
        id: this.todo.id,
        description: this.todo.description,
        group: this.todo.group,
        category: this.todo.category,
        time: this.time,
        status: this.todo.status
      }
      this.addNewTodoItem(item)
    },
    saveUpdatedStatus(e){
      e.preventDefault()
      const item = {
        id: this.todo.id,
        description: this.todo.description,
        group: this.todo.group,
        category: this.todo.category,
        time: this.todo.time,
        status: this.status
      }
      this.addNewTodoItem(item)
    },
    showEditDescription(){
      this.editDescription = !this.editDescription
    },
    showEditGroup(){
      this.editGroup = !this.editGroup
    },
    showEditCategory(){
      this.editCategory = !this.editCategory
    },
    showEditTime(){
      this.editTime= !this.editTime
    },
    showEditStatus(){
      this.editStatus= !this.editStatus
    },
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
        id: this.todo.id,
        description: this.description,
        group: this.group,
        category: this.category,
        time: this.time,
        status: this.status
      }
      console.log(item)
      this.addNewTodoItem(item) // resets any input field you haven't touched
    },
  },
  data() {
    return {
      todo: {},
      editDescription: false,
      editGroup: false,
      editCategory: false,
      editStatus: false,
      editTime: false,
      description: '',
      group: '',
      category: '',
      time: '',
      status: ''
    }
  }
}
</script>