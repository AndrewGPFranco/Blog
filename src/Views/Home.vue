<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-black">
    <Banner />
    <section class="mobile">
      <div>
        <Titulo titulo="Curiosidade da Semana" />
        <Destaque />
      </div>
      <div class="p-4 bg-black flex justify-center flex-col">
        <Titulo titulo="Vídeo da Semana" class="mb-2 -mt-3.5" />
        <div class="flex justify-center">
          <iframe class="4/4 rounded-md lg:h-96 lg:w-3/4" height="250"
            src="https://www.youtube.com/embed/Z9nr7OFKtOo?si=m6nvTCOQxQ4zbA4X" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </section>
    <section class="mobileCategoria">
      <Titulo titulo="Categorias" class="-mt-6" />
      <div class="flex justify-center bg-black">
        <BotaoCategoria categoria="Back-End" link="/backend" />
        <BotaoCategoria categoria="Front-End" link="/frontend" />
      </div>
      <Linguagens />
    </section>
  </main>
  <footer>
    <Rodape />
  </footer>
</template>

<script setup lang="ts">
import Navbar from "../components/Global/Navbar.vue";
import Rodape from "../components/Global/Rodape.vue";
import Destaque from "../components/Home/Destaque.vue";
import BotaoCategoria from "../components/Home/BotaoCategoria.vue";
import Titulo from "../components/Global/Titulo.vue";
import Banner from "../components/Home/Banner.vue";
import Linguagens from "../components/Home/Linguagens.vue";
</script>

<style scoped>
@media only screen and (min-width: 768px){
  .mobile {
    display: flex;
    justify-content: center;
  }

  iframe {
    width: 40vw;
  }

  .mobileCategoria {
    padding: 50px;
  }
}
</style>