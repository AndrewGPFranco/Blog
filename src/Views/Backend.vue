<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-black">
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

<script setup lang="ts">
import Navbar from "../components/Global/Navbar.vue";
import Rodape from "../components/Global/Rodape.vue";
import Iframe from "../components/Global/Iframe.vue";
import Titulo from "../components/Global/Titulo.vue";
import videosBack from "../components/Utils/Backend/videosb.json";
import { ref } from "vue";

const videos = ref(videosBack);
</script>