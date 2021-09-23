<template>
  <div class="p-10 flex flex-col" :data-test-id="dataTestId">
     <h3 class="text-xl">{{text}}: <strong>{{field}}</strong></h3>
     <div class="flex content-center">
        <button @click="showField" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-20 m-5" id="edit">Edit</button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-20 m-5" id="delete">Delete</button>
     </div>
      <div v-if="editField">
        <slot></slot>
        <button @click="saveUpdatedField" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-20" id="save">Save</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'edit-field',
  props: {
    text: String,
    field: String,
    saveUpdatedField: Function,
    dataTestId: String
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