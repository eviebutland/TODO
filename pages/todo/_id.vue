<template>
  <main class="rounded overflow-hidden shadow-lg decoration-clone">
    <section>
      <EditField 
        text="Description"
        :field="todo.description"
        :saveUpdatedField="saveUpdatedDescription">
          <FormInput 
            label="Description of task"
            name="item"
            placeholder="please enter a description"
            @update-input="updateDescription">
          </FormInput>
      </EditField>
    </section>
    <br/>
    <section>
      <EditField 
        text="Group"
        :field="todo.group"
        :saveUpdatedField="saveUpdatedGroup">
          <FormDropdown 
            label="Please select a group" 
            v-bind:items="['personal', 'work']"
            name="group"
            @update-dropdown-selection="updateGroup">
          </FormDropdown>
      </EditField>
    </section>

    <br/>
    <section>
      <EditField 
        text="Category"
        :field="todo.category"
        :saveUpdatedField="saveUpdatedCategory">
          <FormRadio
            label="Please select a category"
            v-bind:items="categories"
            name="category"
            @update-radio="updateCategory"
          ></FormRadio>
      </EditField>
    </section>

    <br/>
    <section>
      <EditField
        text="Estimated Time"
        :field="todo.time"
        :saveUpdatedField="saveUpdatedTime">
          <FormInput
            label="Please enter the estimated time"
            name="estimated-time"
            placeholder="5 mins"
            @update-input="updateTime">
          </FormInput>        
      </EditField>
    </section>

    <br/>
    <section>
      <EditField
        text="Status"
        :field="todo.status"
        :saveUpdatedField="saveUpdatedStatus">       
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
      </EditField>
    </section>

    <p class="text-sm font-medium text-gray-900">ID: {{todo.id}}</p>
    <br/>
  </main>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import categories from '../../utils/category'

export default {
  name: 'unique-todo',
  mounted(){
    this.categories = categories()
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
      // save should update the text on screen + update state of 'todo' locally
      e.preventDefault()
      const item = {
        id: this.todo.id,
        description: this.description,
        group: this.todo.group,
        category: this.todo.category,
        time: this.todo.time,
        status: this.todo.status
      }
      // this.todo.description = this.description
      console.log(item)
      this.addNewTodoItem(item)
    },
    saveUpdatedGroup(e){
      // need to tidy these up
      e.preventDefault()
      const item = {
        id: this.todo.id,
        description: this.todo.description,
        group: this.group,
        category: this.todo.category,
        time: this.todo.time,
        status: this.todo.status
      }
      console.log(this.group)
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
      description: '',
      group: '',
      category: '',
      time: '',
      status: ''
    }
  }
}
</script>