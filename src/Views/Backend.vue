<template>
  <header>
    <Navbar />
  </header>
  <main class="text-white bg-black p-4">
    <h1>Tela de backend</h1>
</main>
  <footer>
    <Rodape />
  </footer>
</template>

<script>
import Navbar from "../components/Navbar.vue";
  import Rodape from "../components/Rodape.vue";
  export default {
    name: "Backend",
    components: {
      Navbar, 
      Rodape
    }
  }
</script>