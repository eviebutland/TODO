<template>
  <form>
      <FormInput 
        label="Description of task"
        name="item"
        placeholder="please enter a description"
        @update-input="$emit('update-description', $event)"
        >
      </FormInput>
      <FormDropdown 
        label="Please select a group" 
        v-bind:items="['personal', 'work']"
        name="group"
        @update-dropdown-selection="$emit('update-group', $event)">
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
        @update-radio="$emit('update-category', $event)"
      ></FormRadio>
      <FormInput
        label="Please enter the estimated time"
        name="estimated-time"
        placeholder="5 mins"
        @update-input="$emit('update-time', $event)">
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
        @update-radio="$emit('update-status', $event)"
      ></FormRadio> 
      <button type="submit" @click="$emit('update-state', $event)">Add new task</button>
    </form>
</template>

<script>

export default {
  name: 'todo-form',
  data(){
    return {
      description: ''
    }
  }
}
</script>