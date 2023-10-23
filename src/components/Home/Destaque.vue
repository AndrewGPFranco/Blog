<template>
  <section class="p-5 bg-black">
    <div class="border-2 p-2 border-gray-700 rounded-xl bg-orange-600">
    <div v-for="(noticia, i) in noticiasData" :key="i" class="border border-gray-200 rounded-xl p-3 bg-black text-center">
      <h1 class="text-orange-400">{{ noticia.titulo }}</h1>
      <p class="text-white">{{ noticia.descricao }}</p>
    </div>
    </div>
  </section>
</template>

<script>
import noticias from "./noticias.json";

export default {
  name: "Destaque",
  props: {
    noticias: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      noticiasData: []
    };
  },
  created() {
    this.noticiasData = noticias;
  }
};
</script>
