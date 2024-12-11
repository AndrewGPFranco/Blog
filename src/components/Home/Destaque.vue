<template>
  <section id="animation" class="p-5 bg-black -mt-2">
    <div class="border-2 p-0.5 border-gray-700 rounded-xl bg-black" id="containerPai">
      <div v-for="noticia in noticiasData" :key="noticia.id"
        class="border border-gray-700 rounded-xl p-3 bg-black text-center lg:flex lg:flex-col lg:justify-center">
        <img class="mb-2 rounded-xl lg:w-2/4 lg:min-auto" :src="noticia.link" alt="Thumb do Post" />
        <Line />
        <p class="text-white text-start mt-2 mb-2">
          {{ ler ? noticia.descricao : exibirDescricao(noticia.descricao, 107) }}
        </p>
        <button class="btnLer" @click="readMore">{{ ler ? 'Ler menos' : 'Ler mais' }}</button>
        <a :href="noticia.linkExterno" target="_blank">
          <button class="text-black bg-orange-500 p-2 rounded-2xl font-bold mt-1" v-if="noticia.linkExterno.length > 0">
            Acessar
          </button>
        </a>
      </div>
    </div>
  </section>
  <Line />
</template>

<script setup lang="ts">
// @ts-ignore
import noticias from "../Utils/noticias.json";
import Line from "../Global/Line.vue";
import { onMounted, ref } from "vue";
import { IArtigo } from "../../interfaces/IArtigo";

let ler = ref(false);
let noticiasData = ref([] as IArtigo[]);

const readMore = () => {
  ler.value = !ler.value;
}

const exibirDescricao = (description: string, maxLength: number) => {
  return description.substring(0, maxLength) + "...";
}

onMounted(() => {
  noticiasData.value = noticias;
});
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

.btnLer:hover {
  background-color: orange;
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