<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Titulo titulo="Aulas sobre Vue"/>
     <div v-for="video in videos" :key="video.id" class="-mt-4">
      <Iframe :link="video.link" :titulo="video.titulo" :descricao="video.descricao" :assistir="assistir" :imagem="video.imagem" :alt="video.alt" />
    </div>
    <div class="bg-black flex justify-center">
    <button @click="assistirVideo" class="bg-black text-blue-300">Assistir</button>
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
      videos: videos,
      assistir: false
    };
    },
    methods: {
      assistirVideo() {
        this.assistir = !this.assistir
      }
    }
  }
</script>