<template>
  <section class="flex flex-wrap bg-black justify-around p-3 mt-1">
    <router-link :to="link">
      <button class="bg-gray-700 text-black p-3 rounded-xl font-bold">
        {{ props.categoria }}
      </button>
    </router-link>
  </section>
</template>

<script setup lang="ts">
  const props = defineProps<{
    categoria: string,
    link: string,
  }>();
</script>

<style scoped>
button:hover {
  background-color: rgb(91, 206, 206);
}
</style>