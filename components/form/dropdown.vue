<template>
  <fieldset>
    <label :for="name">{{label}}</label>
    <select :name="name" :id="name">
      <option :value="item" v-for="item in items" v-bind:key="item">{{item}}</option>
    </select>
  </fieldset>
</template>

<script>

export default {
  name: 'dropdown',
  props: {
    label: String,
    name: String,
    items: Array
  }
}
</script>