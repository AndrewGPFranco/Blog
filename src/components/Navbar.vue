<template>
  <nav class="bg-black p-2 flex flex-col">
    <div class="flex justify-between items-center m-4">
      <router-link to="/"
        ><img class="w-4/4 h-20" src="../assets/logo.jpg" alt="Logo do Blog"
      /></router-link>
      <button @click="showMenu" v-if="!ativado">
        <i
          class="pi pi-align-justify"
          style="color: orange; font-size: 2rem"
        ></i>
      </button>
      <button @click="showMenu" v-if="ativado">
        <i
          class="pi pi-minus"
          style="color: orange; font-size: 2rem"
        ></i>
      </button>
    </div>
    <div class="animation" v-show="ativado">
      <ul class="text-white m-4 flex flex-col text-end">
        <router-link to="/" class="flex justify-end"
          ><li
            class="bg-orange-500 text-white p-1 text-center m-1 rounded-lg w-2/5 font-bold"
          >
            Home
          </li></router-link
        >
        <router-link to="/backend" class="flex justify-end"
          ><li
            class="bg-orange-500 text-white p-1 text-center m-1 rounded-lg w-2/5 font-bold"
          >
            Back-End
          </li></router-link
        >
        <router-link to="/frontend" class="flex justify-end"
          ><li
            class="bg-orange-500 text-white p-1 text-center m-1 rounded-lg w-2/5 font-bold"
          >
            Front-End
          </li></router-link
        >
        <router-link to="/artigos" class="flex justify-end"
          ><li
            class="bg-orange-500 text-white p-1 text-center m-1 rounded-lg w-2/5 font-bold"
          >
            Artigos Tech
          </li></router-link
        >
      </ul>
    </div>
  </nav>
  <Line />
</template>

<script>
import Line from "./Line.vue";
export default {
  name: "Navbar",
  data() {
    return {
      ativado: false,
    };
  },
  methods: {
    showMenu() {
      this.ativado = !this.ativado;
      console.log(this.ativado);
    },
  },
  components: {
    Line,
  },
};
</script>

<style scoped>
  .animation {
    animation: slideInDown;
    animation-duration: 1s;
  }
</style>