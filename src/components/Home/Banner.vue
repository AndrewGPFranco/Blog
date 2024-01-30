<template>
  <div id="animation" class="pt-2 px-3.5 bg-black">
    <img class="mb-2 p-1 rounded-2xl" src="../../assets/banner.jpg" alt="Banner" />
    <Line />
  </div>
</template>

<script>
import Line from "../Line.vue";
export default {
  name: "Banner",
  components: { Line },
};
</script>

<style scoped>
#animation {
  animation: slideInRight;
  animation-duration: 0.5s;
}
</style>