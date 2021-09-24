<template>
  <fieldset>
    <label :for="name" :class="hideLabel && 'hidden'">{{label}}</label>
    <input type="text" 
      :name="name" :id="name" 
      :placeholder="placeholder" 
      v-model="description" 
      @input="$emit('update-input', description)" 
      :data-test-id="dataTestId"
      class="border-none "> 
  </fieldset>
</template>

<script>
export default {
  name: 'custom-input',
  props: {
    label: String,
    name: String,
    placeholder: String,
    hideLabel: Boolean,
    dataTestId: String
  },
  data(){
    return {
      description: ''
    }
  }
}
</script>