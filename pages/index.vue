<template>
  <main class="border-solid border-2 shadow  mx-20 rounded-xl flex" data-test-id="home-page-main">
    <div class="p-5 bg-gray-100">
      <FormInput placeholder="search" type="text" label="search" name="search" class="rounded-xl" hideLabel/>
      <div class="flex justify-between mt-5 mb-2">
        <button class=" border-solid border-2 border-rose-500 m-1 p-2 w-1/2 bg-rose-500 rounded-xl text-left">
          <div class="flex justify-between">
          <font-awesome-icon :icon="['fa', 'calendar']"  style="font-size: 20px"/>
          <p><strong>1</strong></p>
          </div>
          <h2>Today</h2>
        </button>
        <button class="border-solid border-2 border-gray-200 m-1 p-2 w-1/2 bg-gray-200 rounded-xl text-left">
          <div class="flex justify-between">
          <font-awesome-icon :icon="['fa', 'calendar']"  style="font-size: 20px"/>
          <p><strong>4</strong></p>
          </div>
          <h2>Scheduled</h2>
        </button>
      </div>
      <button class="my-5 border-solid border-2 border-gray-200 m-1 p-2 bg-gray-200 rounded-xl w-full text-left">
        <div class="flex justify-between">
        <font-awesome-icon :icon="['fa', 'calendar']"  style="font-size: 20px"/>
        <p><strong>1</strong></p>
        </div>
        <h2>All</h2>
      </button>
      <h3>My lists</h3>
      <div>
        <font-awesome-icon :icon="['fas', 'list']"  style="font-size: 20px" class="bg-blue-500 rounded-xl"/>
      </div>
    </div>
    <div class="flex flex-col p-10 shadow w-full">
      <h1 class="text-7xl text-rose-300" data-test-id="home-page-title">Today</h1>
      <NuxtLink to="/addToDo">Add a todo</NuxtLink>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>
