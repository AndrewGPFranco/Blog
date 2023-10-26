<template>
  <header>
    <Navbar/>
  </header>
  <div>
    <Artigo />
  </div>
  <footer>
    <Rodape />
  </footer>
</template>

<script>
import Artigo from "../components/Artigos/Artigo.vue"
import Navbar from "../components/Navbar.vue";
import Rodape from "../components/Rodape.vue";
export default {
  name: "Artigos",
  components: { Artigo, Navbar, Rodape }
}
</script>