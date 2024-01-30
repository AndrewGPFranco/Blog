<template>
  <section id="animation" class="p-5 bg-black -mt-2">
    <div class="border-2 p-0.5 border-gray-700 rounded-xl bg-black" id="containerPai">
      <div v-for="noticia in noticiasData" :key="noticia.id"
        class="border border-gray-700 rounded-xl p-3 bg-black text-center lg:flex lg:flex-col lg:justify-center">
        <img class="mb-2 rounded-xl lg:w-2/4 lg:min-auto" :src="noticia.link" alt="Thumb do Post" />
        <Line />
        <p v-if="ler === false" class="text-white text-start mt-2">
          {{ noticia.descricao.substring(0, 107) + "..." }}
        </p>
        <p v-if="ler" class="text-white text-start mt-2">
          {{ noticia.descricao }}
        </p>
        <button class="btnLer" v-if="!ler" @click="readMore">Ler mais</button>
        <button class="btnLer" v-if="ler" @click="readMore">Ler menos</button>
        <a :href="noticia.linkExterno" target="_blank">
          <button class="text-black bg-orange-500 p-2 rounded-2xl font-bold mt-1">
            Acessar
          </button>
        </a>
      </div>
    </div>
  </section>
  <Line />
</template>

<script>
import noticias from "./noticias.json";
import Line from "../Global/Line.vue";

export default {
  name: "Destaque",
  props: {
    noticias: {
      type: Array,
      required: true,
    },
  },
  methods: {
    readMore() {
      this.ler = !this.ler;
    }
  },
  data() {
    return {
      noticiasData: [],
      ler: false
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

<style scoped>
#animation {
  animation: slideInRight;
  animation-duration: 0.5s;
}

button:hover {
  background-color: rgb(91, 206, 206);
}

.btnLer {
  background-color: rgb(91, 206, 206);
  color: black;
  padding: 6px;
  border-radius: 10px;
  font-weight: bold;
  margin-right: 10px;
}

@media (min-width: 1280px) {
  #animation {
    display: flex;
    width: 400px;
    margin: auto;
  }

  img {
    width: auto;
  }
}
</style>