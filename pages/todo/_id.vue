<template>
  <main>
     <h3 class="text-xl">{{todo.description}}</h3>
      <p class="text-sm font-medium text-gray-900">Group: {{todo.group}}</p>
      <p class="text-sm font-medium text-gray-900">Category: {{todo.category}}</p>
      <p class="text-sm font-medium text-gray-500">Estimated Time: {{todo.time}}</p>
      <p class="text-sm font-medium text-gray-900">Status: {{todo.status}}</p>
      <p class="text-sm font-medium text-gray-900">ID: {{todo.id}}</p>
      <br/>
      <button @click="showEditTodoFields">Edit</button>
      <div v-if="isShowingEditTodoFields">
        <form>
          <p>Edit todo fields</p>
        </form>
      </div>
  </main>

</template>

<script>
import { mapGetters } from 'vuex'

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
    showEditTodoFields(){
      this.isShowingEditTodoFields = !this.isShowingEditTodoFields
    }
  },
  data() {
    return {
      todo: {},
      isShowingEditTodoFields: false
    }
  }
}
</script>