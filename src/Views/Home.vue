<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Titulo titulo="Curiosidade da Semana" />
    <Destaque />
    <div class="p-4 bg-black">
    <Titulo titulo="Vídeo da Semana" />
    <video width="560" height="315" controls class="border border-orange-400 mt-2">
  <source src="../../video.mp4" type="video/mp4">
  Seu navegador não suporta a tag de vídeo.
</video>
    </div>
    <Titulo titulo="Categorias" />
    <div class="flex">
    <Card :imagem="{ src: 'https://i.ibb.co/GCqVwFx/backend.jpg', alt: 'Imagem um' }" link="/backend" />
    <Card :imagem="{ src: 'https://i.ibb.co/4dqKPR2/frontend.jpg', alt: 'Imagem um' }" link="/frontend" />
      </div>
  </main>
  <footer>
    <Rodape />
  </footer>
</template>

<script setup>
  import Navbar from "../components/Navbar.vue";
  import Rodape from "../components/Rodape.vue";
  import Destaque from "../components/Home/Destaque.vue"
  import Card from "../components/Home/Card.vue"
  import Titulo from "../components/Titulo.vue"
  const name = "Home"
  const components = { Navbar, Rodape, Destaque, Card, Titulo }
</script>
