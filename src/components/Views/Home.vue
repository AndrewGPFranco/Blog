<template>
    <Navbar />
    <main>
      <h1 class="text-orange-500">Main</h1>
    </main>
</template>

<script setup>
  import Navbar from "../Navbar.vue";
  const name = "Home"
  const components = { Navbar }
</script>