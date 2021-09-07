<template>
  <h1>I am the specfic todo</h1>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'unique-todo',
  mounted(){
    console.log(this)
    console.log(this.$route.params.id)

    // get item from state or api and find the item
    console.log(this.getSingleItem(this.$route.params.id))
  },
  computed: {
    ...mapGetters([
      'getSingleItem'
    ])
  },
  methods: {
    returnTodo(){
    }
  }
}
</script>