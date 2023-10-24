<template>
  <header>
    <Navbar />
  </header>
  <main>
     <div v-for="video in videos" :key="video.id">
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
  import videos from "../components/Backend/videosb.json"
  export default {
    name: "Backend",
    components: {
      Navbar, 
      Rodape,
      Iframe
    },
    data() {
    return {
      videos: videos
    };
    }
  }
</script>