<template>
  <div class="pt-2 bg-black">
    <img class="mb-2 p-1" src="../../assets/banner.jpg" alt="Banner" />
    <Line />
  </div>
</template>

<script>
import Line from "../Line.vue"
export default {
  name: "Banner",
  components: { Line }
}
</script>