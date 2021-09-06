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
        name="group">
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
      ></FormRadio> 
    </form>
  </section>
</template>

<script>
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
  methods: {
    updateDescription(value){
      this.description = value
    },
    updateTime(value){
      this.time = value
    }
  }


}
</script>