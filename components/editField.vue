<template>
  <div>
     <h3 class="text-xl">{{field}}</h3>
      <button @click="showField">Edit</button>
      <div v-if="editField">
        <slot></slot>
        <button @click="saveUpdatedField">Save</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'edit-field',
  props: {
    field: String,
    saveUpdatedField: Function
  },
  data(){
    return {
      editField: false
    }
  },
  methods: {
    showField(){
      this.editField = !this.editField
    },
  }
}
</script>