<template>
  <header>
    <Navbar />
  </header>
  <h1>Tela de Backend</h1>
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