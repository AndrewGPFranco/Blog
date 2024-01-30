<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Banner />
    <Titulo titulo="Curiosidade da Semana" />
    <Destaque />
    <div class="p-4 bg-black flex justify-center flex-col">
      <Titulo titulo="Vídeo da Semana" class="mb-2 -mt-3.5" />
      <p v-if="assistir === false" class="text-gray-300 text-center -mt-2">
        Toque para Assistir
      </p>
      <div class="flex justify-center text-center">
        <button @click="video" v-if="assistir === false"
          class="text-blue-500 font-bold p-1 w-2/5 mt-2 text-xl rounded-md">
          <i class="pi pi-eye" style="font-size: 5rem; color: orange"></i>
        </button>
      </div>
      <div class="flex justify-center">
        <iframe v-if="assistir" class="4/4 rounded-md lg:h-96 lg:w-3/4" height="250"
          src="https://www.youtube.com/embed/uK_Jet4nOP0?si=46DNoAVn_Tm6b3fZ" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>
    <Titulo titulo="Categorias" class="-mt-6" />
    <div class="flex justify-center bg-black">
      <BotaoCategoria categoria="Back-End" link="/backend" />
      <BotaoCategoria categoria="Front-End" link="/frontend" />
    </div>
    <Linguagens />
  </main>
  <footer>
    <Rodape />
  </footer>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Rodape from "../components/Rodape.vue";
import Destaque from "../components/Home/Destaque.vue";
import BotaoCategoria from "../components/Home/BotaoCategoria.vue";
import Titulo from "../components/Titulo.vue";
import Banner from "../components/Home/Banner.vue";
import Linguagens from "../components/Home/Linguagens.vue";

export default {
  name: "Home",
  data() {
    return {
      assistir: false,
    };
  },
  components: {
    Navbar,
    Rodape,
    Destaque,
    BotaoCategoria,
    Titulo,
    Banner,
    Linguagens,
  },
  methods: {
    video() {
      this.assistir = !this.assistir;
    },
  },
};
</script>

<style scoped>
main {
  background-color: black;
}
</style>