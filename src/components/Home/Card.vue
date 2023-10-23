<template>
  <section class="flex flex-wrap bg-black justify-around p-3">
    <img class="w-3/4" :src="imagem.src" :alt="imagem.alt" />
  </section>
</template>

<script>
  export default {
    name: "Card",
    props: {
      imagem: Object
    }
  }
</script>