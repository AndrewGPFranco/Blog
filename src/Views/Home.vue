<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Destaque />
  </main>
  <footer>
    <Rodape />
  </footer>
</template>

<script setup>
  import Navbar from "../components/Navbar.vue";
  import Rodape from "../components/Rodape.vue";
  import Destaque from "../components/Home/Destaque.vue"
  const name = "Home"
  const components = { Navbar, Rodape, Destaque }
</script>