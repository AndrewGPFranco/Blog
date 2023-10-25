<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Titulo titulo="Curiosidade da Semana" />
    <Destaque />
    <div class="p-4 bg-black flex justify-center flex-col">
    <Titulo titulo="Vídeo da Semana" />
      <p v-if="assistir === false" class="text-white text-center">Toque para Assistir</p>
      <div class="flex justify-center text-center">
    <button @click="video" v-if="assistir === false" class="text-blue-500 font-bold p-1 w-2/5 mt-2 text-xl rounded-md"><i class="pi pi-eye" style="font-size:5rem" ></i></button>
      </div>
    <video width="560" height="315" controls class="border border-orange-400 mt-2" v-if="assistir">
  <source src="../../video.mp4" type="video/mp4">
  Seu navegador não suporta a tag de vídeo.
</video>
    </div>
    <Titulo titulo="Categorias" />
    <div class="flex justify-center bg-black">
    <Card categoria="Back-End" link="/backend" />
    <Card categoria="Front-End" link="/frontend" />
      </div>
  </main>
  <footer>
    <Rodape />
  </footer>
</template>

<script>
  import Navbar from "../components/Navbar.vue";
  import Rodape from "../components/Rodape.vue";
  import Destaque from "../components/Home/Destaque.vue"
  import Card from "../components/Home/Card.vue"
  import Titulo from "../components/Titulo.vue"
  export default {
    name: "Home",
    data() {
      return {
        assistir: false
      }
    },
    components: {
      Navbar, 
      Rodape, 
      Destaque, 
      Card, 
      Titulo,
    },
  methods: {
    video() {
      this.assistir = !this.assistir
    }
  }
  }
</script>
