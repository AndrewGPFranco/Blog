<template>
  <section class="bg-black p-3">
    <Titulo titulo="Tecnologias p/ Aprender"/>
    <div class="flex flex-wrap justify-center">
      <img class="w-20 h-20" src="./imagens/ruby.png" alt="imagem" />
    </div>
  </section>
</template>

<script>
  import Titulo from "../Titulo.vue"
  export default {
    name: "Linguagens",
    components: { Titulo }
  }
</script>