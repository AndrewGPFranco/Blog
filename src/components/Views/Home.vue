<template>
    <Navbar />
    <main>
      <h1 class="text-orange-500">Main</h1>
    </main>
    <Rodape />
</template>

<script setup>
  import Navbar from "../Navbar.vue";
  import Rodape from "../Rodape.vue";
  const name = "Home"
  const components = { Navbar, Rodape }
</script>