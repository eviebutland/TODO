<template>
  <fieldset>
    <label :for="name">{{label}}</label>
    <input type="text" :name="name" :id="name" :placeholder="placeholder"> 
  </fieldset>
</template>

<script>
export default {
  name: 'input',
  props: {
    label: String,
    name: String,
    placeholder: String
  }
}
</script>