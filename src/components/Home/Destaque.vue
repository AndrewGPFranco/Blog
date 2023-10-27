<template>
  <section class="p-5 bg-black -mt-2">
    <div class="border-2 p-0.5 border-gray-700 rounded-xl bg-black">
      <div
        v-for="noticia in noticiasData"
        :key="noticia.id"
        class="border border-gray-700 rounded-xl p-3 bg-black text-center lg:flex lg:flex-col lg:justify-center"
      >
        <img class="mb-2 rounded-xl lg:w-2/4 lg:min-auto" src="../../assets/vue.jpg" alt="Thumb do Post" />
        <Line />
        <p class="text-white text-start mt-2">
          {{ noticia.descricao.substring(0, 106) + "..." }}
        </p>
        <router-link to="/artigos">
          <button class="text-blue-500 underline">Leia mais</button>
        </router-link>

        <div class="flex justify-end">
          <p
            v-if="noticia.categoria === 'Front-end'"
            class="font-bold text-yellow-500 bg-black text-end p-1.5 rounded w-2/4"
          >
            {{ noticia.categoria }}
          </p>
          <p
            v-else
            class="font-bold text-red-500 bg-black text-end p-1.5 rounded w-2/4"
          >
            {{ noticia.categoria }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <Line />
</template>

<script>
import noticias from "./noticias.json";
import Line from "../Line.vue";

export default {
  name: "Destaque",
  props: {
    noticias: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      noticiasData: [],
    };
  },
  created() {
    this.noticiasData = noticias;
  },
  components: {
    Line,
  },
};
</script>
