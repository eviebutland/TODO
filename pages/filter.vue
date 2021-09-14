<template>
  <section>
    <h1>filter by category, status, time etc</h1>
    <div>
      <form>
        <label for="filterTodo">Filter</label>
        <select name="filterTodo" v-model="filterBy">
          <option value="category">Category</option>
          <option value="status">Status</option>
          <option value="group">Group</option>
        </select>
        <div v-if="filterBy === 'category'">
          <label for="filterCategory">Category</label>
          <select name="filterTodo" v-model="category" v-on:change="displayCategory">
            <option value="quick-task">Quick task</option>
            <option value="task">Task</option>
            <option value="project">Project</option>
          </select>
        </div>
        <div v-if="filterBy === 'status'">
          <label for="filterCategory">Status</label>
          <select name="filterTodo" v-model="status" v-on:change="filterByStatus(status)">
            <option value="complete">Complete</option>
            <option value="not-complete">Not Complete</option>
          </select>
        </div>
        <div v-if="filterBy === 'group'">
          <label for="filterCategory">Group</label>
          <select name="filterTodo" v-model="group" v-on:change="filterByGroup(group)">
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </div>
      </form>
      {{filterByCategory(category)}}
      {{filterByGroup(group)}}
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Filter',
  data() {
    return {
      filterBy: '',
      category: '',
      status: '',
      group: '',
      list: []
    }
  },
  methods: {
    ...mapGetters([
      'filterByCategory',
      'filterByStatus',
      'filterByGroup'
    ]),
    displayCategory() {
      
      this.filterByCategory(this.category)
      console.log(this.filterByCategory(this.category))
    }
  }
}
</script>