<template>
  <section class="flex flex-wrap bg-black justify-around p-3">
    <img class="w-2/4" :src="imagem.src" :alt="imagem.alt" />
  </section>
</template>

<script>
  export default {
    name: "Card",
    props: {
      imagem: Object,
      imagemdois: Object
    }
  }
</script>