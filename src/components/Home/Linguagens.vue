<template>
  <section class="bg-black p-3">
    <Titulo titulo="Tecnologias p/ Aprender"/>
    <div class="flex flex-wrap justify-center">
        <img class="w-20 m-1 h-20" v-for="(imagem, i) in imagens" :key="i" :src="imagem.src" alt="logo da linguagem" />
    </div>
  </section>
</template>

<script>
  import Titulo from "../Titulo.vue"
  export default {
    name: "Linguagens",
    components: { Titulo },
    data() {
    return {
      imagens: [
        { src: 'src/assets/ruby.png' },
        { src: 'src/assets/java.png' },
        { src: 'src/assets/python.png' },
        { src: 'src/assets/tailwind.png' },
      ],
    }
  }
  }
</script>