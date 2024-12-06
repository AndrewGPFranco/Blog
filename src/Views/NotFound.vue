<template>
  <section>
    <h1>{{ message }}</h1>
  </section>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  
  const message = ref("Está página não foi encontrada!");
</script>