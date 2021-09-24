<template>
  <fieldset>
    <label :for="name" :class="{'hidden': hiddenLabel}">{{label}}</label>
      <input type="checkbox" 
        :name="name" 
        id="checkbox" 
        v-model="selectedItem" 
        value="" 
        v-on:change="$emit('update-checkbox', selectedItem)" 
        :data-test-id="dataTestId">
  </fieldset>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    label: String,
    name: String,
    dataTestId: String,
    hiddenLabel: Boolean
  },
  data(){
    return {
      selectedItem: ''
    }
  },
  mounted() {
    console.log(this.items)
  }
}
</script>