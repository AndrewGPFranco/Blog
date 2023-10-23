<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Titulo titulo="Curiosidade da Semana" />
    <Destaque />
    <Titulo titulo="Categorias" />
    <Card :imagem="{ src: 'https://i.ibb.co/GCqVwFx/backend.jpg', alt: 'Imagem um' }" />
    <Card :imagem="{ src: 'https://i.ibb.co/4dqKPR2/frontend.jpg', alt: 'Imagem um' }" />
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
