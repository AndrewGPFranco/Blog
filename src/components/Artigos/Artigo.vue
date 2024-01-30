<template>
  <section id="animation" class="bg-black text-white p-4">
    <div v-for="artigo in artigos" :key="artigo.id">
      <Titulo class="text-start" :titulo="artigo.titulo" />
      <p class="mt-1">{{ artigo.textoUm }}</p>
      <img class="my-3" :src="artigo.imagem" alt="Imagem do Artigo" />
      <p>{{ artigo.textoDois }}</p>
      <p class="text-end text-blue-400 font-bold text-sm">{{ artigo.data }}</p>
    </div>
  </section>
</template>

<script>
import Titulo from "../Global/Titulo.vue";
import artigos from "./artigos.json";

export default {
  name: "Artigo",
  components: { Titulo },
  data() {
    return {
      artigos: artigos
    };
  },
};
</script>

<style scoped>
#animation {
  animation: slideInLeft;
  animation-duration: 0.5s;
}
</style>