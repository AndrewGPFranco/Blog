<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Artigo />
  </main>
  <footer>
    <Rodape />
  </footer>
</template>

<script>
import Artigo from "../components/Artigos/Artigo.vue";
import Navbar from "../components/Navbar.vue";
import Rodape from "../components/Rodape.vue";
export default {
  name: "Artigos",
  components: { Artigo, Navbar, Rodape },
};
</script>

<style scoped>
main {
  background-color: black;
}
</style>