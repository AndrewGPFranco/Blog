<template>
  <div id="animation" class="pt-2 px-3.5 bg-black">
    <img class="mb-2 p-1 rounded-2xl" src="../../assets/banner.jpg" alt="Banner" />
    <Line />
  </div>
</template>

<script setup lang="ts">
import Line from '../Global/Line.vue';
</script>

<style scoped>
#animation {
  animation: slideInRight;
  animation-duration: 0.5s;
}
</style>