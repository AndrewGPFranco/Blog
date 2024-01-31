<template>
  <section class="bg-black p-3">
    <Titulo titulo="Tecnologias p/ Aprender" />
    <div class="flex flex-wrap justify-center mt-1">
      <div class="text-center" v-for="image in linguagens" :key="image.id">
        <img @click="exibir(image.id)" class="w-20 m-1 h-20 cursor-pointer" :src="image.imagem" alt="Logo da {{ image.nome }}" />
        <Transition name="fade">
        <p v-if="exibirNome === image.id" class="text-orange-400 font-bold">
          {{ image.nome }}
        </p>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script>
import Titulo from "../Global/Titulo.vue";
import linguagens from "./linguagens.json";

export default {
  name: "Linguagens",
  components: { Titulo },
  data() {
    return {
      linguagens,
      exibirNome: null
    };
  },
  methods: {
    exibir(id) {
      this.exibirNome = this.exibirNome === id ? null : id;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>