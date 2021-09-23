<template>
  <fieldset>
    <label :for="name">{{label}}</label>
      <div v-for="item in items" :key="item.value" >
        <input type="radio" 
          :name="name" 
          :id="item.text" 
          v-model="selectedItem" 
          :value="item.value" 
          v-on:change="$emit('update-radio', selectedItem)" 
          :data-test-id="dataTestId">
        <label :for="name">{{item.text}}</label>
      </div>
  </fieldset>
</template>

<script>
export default {
  name: 'radio',
  props: {
    label: String,
    name: String,
    dataTestId: String,
    items: { 
      type: Array, 
      default: () => [{
        text: 'Quick task',
        value: 'quick-task'
      }]
    }
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