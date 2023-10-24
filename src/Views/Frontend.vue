<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Titulo titulo="Aulas sobre Vue"/>
     <div v-for="video in videos" :key="video.id" class="-mt-4">
      <Iframe :link="video.link" :titulo="video.titulo" :descricao="video.descricao"/>
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
  import videos from "../components/Frontend/videosf.json"
  export default {
    name: "Frontend",
    components: {
      Navbar, 
      Rodape,
      Iframe,
      Titulo
    },
    data() {
    return {
      videos: videos
    };
    }
  }
</script>