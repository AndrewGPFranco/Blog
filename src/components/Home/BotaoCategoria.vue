<template>
  <section class="flex flex-wrap bg-black justify-around p-3 mt-1">
    <router-link :to="link">
      <button class="bg-gray-700 text-black p-3 rounded-xl font-bold">
        {{ categoria }}
      </button>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "BotaoCategoria",
  props: {
    categoria: String,
    link: String,
  },
};
</script>

<style scoped>
img {
  height: 200px;
}
</style>
