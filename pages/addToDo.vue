<template>
  <section>
    <h1>Add todo item</h1>
    <form>
      <label for="item">Description</label>
      <input type="text" name="item" id="item" placeholder="To do item"> 
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
      <label for="estimated-time">Please enter the estimated time</label>
      <input type="text" name="estimated-time" id="estimated-time">

      <label for="status">Status</label>
      <input type="radio" id="complete" name="status" value="complete">
      <label for="complete">complete</label><br>

      <input type="radio" id="not-complete" name="status" value="not-complete">
      <label for="not-complete">Not complete</label><br>
      
    </form>
  </section>
</template>

<script>
export default {
  name: 'add-to-do'
}
</script>