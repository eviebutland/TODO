<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
    </nav>
    <Nuxt/>
    <footer>
      <p>Footer</p>
      <NuxtLink to="/">Home</NuxtLink>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'default'
}
</script>