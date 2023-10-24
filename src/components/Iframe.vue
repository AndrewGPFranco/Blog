<template>
  <div class="bg-black p-6 flex flex-col justify-center text-white text-center">
    <h1 class="text-orange-500">{{ titulo }}</h1>
    <iframe v-if="assistir" :src="link" frameborder="0" allowfullscreen></iframe>
    <p class="tect-gray-300">{{ descricao }}</p>
  </div>
</template>

<script>
  export default {
    name: "Iframe",
    props: {
      link: String,
      titulo: String,
      descricao: String,
      assistir: Boolean
    }
  }
</script>

<style scoped>
  iframe {
    height: 300px;
    border-radius: 15px;
  }
</style>