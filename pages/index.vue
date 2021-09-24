<template>
  <main class="border-solid border-2 shadow  mx-20 rounded-xl flex" data-test-id="home-page-main">
    <div class="p-5 bg-gray-100">
      <FormInput placeholder="search" type="text" label="search" name="search" class="rounded-xl" hideLabel/>
      <div class="flex justify-between mt-5 mb-2">
        <Tab title="Today" :icon="['fa', 'calendar']" width="half-width"></Tab>
        <Tab title="Scheduled" :icon="['fa', 'calendar']" width="half-width"></Tab>
      </div>
        <Tab title="All" :icon="['fa', 'calendar']" width="full-width"></Tab>
      <h3>My lists</h3>
      <div>
        <font-awesome-icon :icon="['fas', 'list']"  style="font-size: 20px" class="bg-blue-500 rounded-xl"/>
      </div>
    </div>
    <div class="flex flex-col p-10 shadow w-full">
      <h1 class="text-7xl text-rose-300" data-test-id="home-page-title">Today</h1>
      <ul @click="addNewFormFields" @mouseleave="removeFormFields">
        <li v-for="form in formComponents" :key="form.name">
          <component :is="form"></component>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import formVue from '~/components/form.vue'

export default {
  name: 'Home',
  data(){
    return {      
      // description: '',
      group: '',
      category: '',
      time: '',
      status: '',
      formComponents: []
    }
  },
  mounted() {
    this.formComponents.push(formVue)
  },
  computed: {
    ...mapState([
      'todos',
      'description'
    ])
  },
  methods: {
    removeFormFields() {
      if(this.formComponents.length  > 1 && this.description !== ""){
        this.formComponents.pop()
      }
    },
    addNewFormFields() {
      this.formComponents.push(formVue)
    },
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
