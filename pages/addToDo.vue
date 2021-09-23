<template>
  <section>
    <h1 class="text-3xl py-4 font-extrabold" data-test-id="add-todo-title">Add todo item</h1>
    <Form
      @update-description="updateDescription"
      @update-group="updateGroup"
      @update-category="updateCategory"
      @update-status="updateStatus"
      @update-time="updateTime"
      @update-state="storeInState">
    </Form>
    <br/>
    <h2>View all todos</h2>
    <button @click="getAllTodos" class="rounded bg-blue-500 md:bg-green-500">Return all todos</button>

    <!-- add styles to me -->
    <ul v-if="todos.length > 0" class="divide-y divide-gray-200 rounded-full" data-test-id="all-todos">
      <li v-for="todo in todos" :key="todo.description" class="ml-3">
        <NuxtLink :to="'/todo/'+ todo.id" data-test-id="new-todo-link">
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
