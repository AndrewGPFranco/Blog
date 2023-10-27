<template>
  <img :src="imagem" alt="logo" />
</template>

<script>
  export default {
    name: "Imagem",
    props: {
      imagem: String
    }
  }
</script>