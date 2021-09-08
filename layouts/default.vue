<template>
  <div>
    <nav class="w-full text-gray-700  h-16  animated z-40 flex md:flex-start shadow  md:items-center mb-10">
      <ul>
        <NuxtLink to="/" class="text-xl text-gray-900 leading-1 hover:text-gray-400 mx-4 md:my-0">Home</NuxtLink>
        <NuxtLink to="/addToDo" class="text-xl text-gray-900 leading-1 hover:text-gray-400 mx-4 md:my-0">Add</NuxtLink>
        <NuxtLink to="/addToDo" class="text-xl text-gray-900 leading-1 hover:text-gray-400 mx-4 md:my-0">Filter</NuxtLink>
      </ul>
    </nav>
    <Nuxt/>
    <footer class="shadow h-16 md:items-center mt-10">
      <ul>
        <NuxtLink to="/" class="text-sm leading-1 hover:text-gray-400 mx-4 md:my-0 text-indigo-500">Home</NuxtLink>
        <NuxtLink to="/addToDo" class="text-sm text-indigo-500 leading-1 hover:text-gray-400 mx-4 md:my-0">Add</NuxtLink>
        <NuxtLink to="/addToDo" class="text-sm text-indigo-500 leading-1 hover:text-gray-400 mx-4 md:my-0">Filter</NuxtLink>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'default'
}
</script>