<template>
  <form>
      <div class="flex items-center">
        <FormCheckbox
        name="status"
        label="status"
        dataTestId="form-checkbox"
        :hiddenLabel="true"
        @update-checkbox="$emit('update-status', $event)">
        </FormCheckbox>
        <FormInput 
          dataTestId="form-description"
          label="Description"
          name="item"
          placeholder="please enter a description"
          @update-input="updateDescription($event)"
          :hideLabel="true">
        </FormInput>
      </div>
      <div class="flex">
        <FormDropdown 
          dataTestId="form-group"
          label="Group" 
          v-bind:items="[{text: 'personal', value: 'personal'}, {text: 'work', value: 'work'}]"
          name="group"
          @update-dropdown-selection="$emit('update-group', $event)">
        </FormDropdown>
        <FormDropdown 
          dataTestId="form-category"
          label="Category" 
          v-bind:items="categories"
          name="category"
          @update-dropdown-selection="$emit('update-category', $event)">
        </FormDropdown>
        <FormInput
          :hideLabel="true"
          dataTestId="form-estimated-time"
          label="Estimated time"
          name="estimated-time"
          placeholder="5 mins"
          @update-input="$emit('update-time', $event)">
        </FormInput>
      </div>
      <button type="submit" @click="$emit('update-state', $event)">Add new task</button>
    </form>
</template>

<script>
import categories from '../utils/category'
import {mapMutations} from 'vuex'
export default {
  name: 'todo-form',
  data(){
    return {
      description: '',
      categories: []
    }
  },
  mounted(){
    this.categories = categories()
  },
  methods: {
    ...mapMutations(['updateDescription'])
  }
}
</script>