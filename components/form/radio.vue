<template>
  <fieldset>
    <label :for="name">{{label}}</label>
      <div v-for="item in items" :key="item.value">
        <label :for="name">{{item.text}}</label>
        <input type="radio" :name="name" :id="item.text">
      </div>
  </fieldset>
</template>

<script>
export default {
  name: 'radio',
  props: {
    label: String,
    name: String,
    items: { 
      type: Array, 
      default: () => [{
      text: 'Quick task',
      value: 'quick-task'
    }
  ,]}
  },
  mounted() {
    console.log(' i was rendered')
  }
}
</script>