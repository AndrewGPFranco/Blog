<template>
  <section id="animation" class="bg-black text-center font-bold pt-3">
    <h1 class="text-blue-400 text-xl">{{ titulo }}</h1>
  </section>
</template>

<script>
import Line from "./Line.vue";
export default {
  name: "Titulo",
  props: {
    titulo: String,
  },
};
</script>

<style scoped>
#animation {
  animation: slideInRight;
  animation-duration: 0.5s;
}
</style>