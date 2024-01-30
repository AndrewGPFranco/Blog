<template>
  <section class="bg-black p-3">
    <Titulo titulo="Tecnologias p/ Aprender" />
    <div class="flex flex-wrap justify-center mt-1">
      <img class="w-20 m-1 h-20" v-for="image in linguagens" :key="image.id" :src="image.imagem"
        alt="logo da image.nome" />
    </div>
  </section>
</template>

<script>
import Titulo from "../Titulo.vue";
import linguagens from "./linguagens.json";

export default {
  name: "Linguagens",
  components: { Titulo },
  data() {
    return {
      linguagens,
    };
  }
};
</script>