<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Titulo titulo="Aulas Categoria: Back-End" />
    <div v-for="video in videos" :key="video.id" class="-mt-4">
      <Iframe :link="video.link" :titulo="video.titulo" :descricao="video.descricao" :imagem="video.imagem"
        :alt="video.alt" />
    </div>
  </main>
  <footer>
    <Rodape />
  </footer>
</template>

<script>
import Navbar from "../components/Global/Navbar.vue";
import Rodape from "../components/Global/Rodape.vue";
import Iframe from "../components/Global/Iframe.vue";
import Titulo from "../components/Global/Titulo.vue";
import videos from "../components/Backend/videosb.json";
export default {
  name: "Backend",
  components: {
    Navbar,
    Rodape,
    Iframe,
    Titulo,
  },
  data() {
    return {
      videos: videos,
    };
  },
};
</script>

<style scoped>
main {
  background-color: black;
}
</style>