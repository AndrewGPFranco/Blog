<template>
  <section class="flex flex-wrap bg-black justify-around p-3">
    <router-link :to="link"><img class="w-5/5" :src="imagem.src" :alt="imagem.alt" /></router-link>
  </section>
</template>

<script>
  export default {
    name: "Card",
    props: {
      imagem: Object,
      link: String
    }
  }
</script>

<style scoped>
  img {
    height: 200px;
  }
</style>