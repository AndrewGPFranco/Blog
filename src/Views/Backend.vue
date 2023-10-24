<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Titulo titulo="Aulas sobre Laravel"/>
     <div v-for="video in videos" :key="video.id" class="-mt-4">
      <Iframe :link="video.link" :titulo="video.titulo" :descricao="video.descricao" :imagem="video.imagem" :alt="video.alt"/>
    </div>
</main>
  <footer>
    <Rodape />
  </footer>
</template>

<script>
import Navbar from "../components/Navbar.vue";
  import Rodape from "../components/Rodape.vue";
  import Iframe from "../components/Iframe.vue"
  import Titulo from "../components/Titulo.vue"
  import videos from "../components/Backend/videosb.json"
  export default {
    name: "Backend",
    components: {
      Navbar, 
      Rodape,
      Iframe,
      Titulo
    },
    data() {
    return {
      videos: videos,
    };
    }
  }
</script>