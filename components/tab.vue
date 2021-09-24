<template>
    <button class="border-solid border-2 border-gray-200 m-1 p-2 w-1/2 bg-gray-200 rounded-xl text-left"
    :class="{
        'w-1/2': width === 'half-width',
        'w-full': width === 'full-width'
    }">
        <div class="flex justify-between">
          <font-awesome-icon :icon="icon"  style="font-size: 20px"/>
          <p><strong>{{numOfItems}}</strong></p>
          </div>
          <h2>{{title}}</h2>
        </button>
</template>

<script>
export default {
    name: 'Tab',
    props:{
        title: String,
        icon: {
            type: [],
            default: ['fa', 'calendar']
        },
        width: {
            type: String,
            enum: ['half-width', 'full-width']
        }
    },
    data(){
        return {
            numOfItems: 0
        }
    }
}
</script>