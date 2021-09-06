<template>
  <fieldset>
    <label :for="name">{{label}}</label>
    <input type="text" :name="name" :id="name" :placeholder="placeholder" v-model="description" @input="$emit('update-input', description)"> 
  </fieldset>
</template>

<script>
export default {
  name: 'custom-input',
  props: {
    label: String,
    name: String,
    placeholder: String
  },
  data(){
    return {
      description: ''
    }
  }
}
</script>