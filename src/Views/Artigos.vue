<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-black">
    <Artigo />
  </main>
  <footer>
    <Rodape />
  </footer>
</template>

<script setup lang="ts">
import Artigo from "../components/Artigos/Artigo.vue";
import Navbar from "../components/Global/Navbar.vue";
import Rodape from "../components/Global/Rodape.vue";
</script>