<template>
  <fieldset>
    <label :for="name" :class="hideLabel && 'hidden'">{{label}}</label>
    <select :name="name" :id="name" v-model="selectedItem" @change="$emit('update-dropdown-selection', selectedItem)" :data-test-id="dataTestId">
      <option :value="item.value" v-for="item in items" v-bind:key="item.value">{{item.text}}</option>
    </select>
  </fieldset>
</template>

<script>

export default {
  name: 'dropdown',
  props: {
    label: String,
    name: String,
    items: Array,
    dataTestId: String,
    hideLabel: Boolean
  },
  data(){
    return {
      selectedItem: ''
    }
  }
}
</script>