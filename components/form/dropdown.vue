<template>
  <fieldset>
    <label :for="name">{{label}}</label>
    <select :name="name" :id="name" v-model="selectedItem" @change="$emit('update-dropdown-selection', selectedItem)">
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
  },
  data(){
    return {
      selectedItem: ''
    }
  }
}
</script>