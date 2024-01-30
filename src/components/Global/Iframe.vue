<template>
  <div class="bg-black p-6 flex flex-col justify-center text-center">
    <h1 class="text-orange-500 mb-1">{{ titulo }}</h1>
    <div class="flex flex-col justify-center text-center">
      <img class="mb-2" :src="imagem" :alt="alt" />
      <p class="text-gray-300">{{ descricao }}</p>
      <a class="text-black font-bold rounded-sm -mb-4 bg-gray-500 p-2.5 w-2/4 m-2" :href="link" target="_blank">VER NO
        YOUTUBE</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Iframe",
  props: {
    link: String,
    titulo: String,
    descricao: String,
    imagem: String,
    alt: String,
  },
};
</script>

<style scoped>
a:hover {
  border-radius: 10px;
  background-color: rgb(91, 206, 206);
}
</style>