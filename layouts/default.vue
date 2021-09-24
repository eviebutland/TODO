<template>
  <div>
    <nav class="w-full text-gray-700  h-16  animated z-40 flex md:flex-start  md:items-center mb-10">
      <ul>
        <NuxtLink to="/" class="text-xl text-gray-900 leading-1 hover:text-gray-400 mx-4 md:my-0" data-test-id="add-todo-page">
          <font-awesome-icon :icon="['fas', 'list']"  style="font-size: 30px"/>
        </NuxtLink>
        <NuxtLink to="/addToDo" class="text-xl text-gray-900 leading-1 hover:text-gray-400 mx-4 md:my-0" data-test-id="add-todo-page">
          <font-awesome-icon :icon="['fas', 'plus-square']"  style="font-size: 30px"/>
        </NuxtLink>
        <NuxtLink to="/filter" class="text-xl text-gray-900 leading-1 hover:text-gray-400 mx-4 md:my-0">
          <font-awesome-icon :icon="['fas', 'sliders-h']"  style="font-size: 30px"/>
        </NuxtLink>
      </ul>
    </nav>
    <Nuxt/>
  </div>
</template>

<script>
export default {
  name: 'default'
}
</script>