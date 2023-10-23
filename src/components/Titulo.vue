<template>
  <section class="bg-black text-center font-bold pt-3">
    <h1 class="text-white text-xl">{{ titulo }}</h1>
  </section>
</template>

<script>
  import Line from "./Line.vue"
  export default {
    name: "Titulo",
    props: {
      titulo: String
    }
  }
</script>