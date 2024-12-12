<template>
  <section id="animation" class="bg-black text-white p-4">
    <div class="mobile" v-for="artigo in artigosSorted" :key="artigo.id">
      <Titulo class="text-start" :titulo="artigo.titulo" />
      <p class="mt-1">{{ artigo.textoUm }}</p>
      <img class="my-3" :src="artigo.imagem" alt="Imagem do Artigo" />
      <p>{{ artigo.textoDois }}</p>
      <div id="date">
        <p class="text-end text-blue-400 font-bold text-sm">{{ artigo.data }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import Titulo from "../Global/Titulo.vue";
import artigos from "../Utils/artigos.json";

export default {
  name: "Artigo",
  components: { Titulo },
  data() {
    return {
      artigos: artigos
    };
  },
  computed: {
    artigosSorted() {
      return this.artigos.slice().sort((a, b) => b.id - a.id);
    }
  }
};
</script>

<style scoped>
#animation {
  animation: slideInLeft;
  animation-duration: 0.5s;
}

@media (min-width: 1280px) {
  #animation {
    padding: 100px;
  }

  .mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>