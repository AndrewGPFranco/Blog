<template>
  <nav class="bg-black p-2 flex flex-col">
    <div class="flex justify-between items-center m-4">
      <img class="w-1/4 h-20" src="../assets/logo.jpg" alt="Logo do Blog" />
      <button @click="showMenu"><i class="pi pi-align-justify" style="color: orange; font-size: 2rem;"></i></button>
    </div>
    <div v-show="ativado">
      <ul class="text-white text-end m-4">
        <router-link to ="/"><li>Home</li></router-link>
        <router-link to ="/backend"><li>Backend</li></router-link>
        <li>Networks</li>
        <li>About</li>
      </ul>
    </div>
  </nav>
  <Line />
</template>

<script>
import Line from "./Line.vue"
export default {
  name: "Navbar",
  data() {
    return {
      ativado: false
    };
  },
  methods: {
    showMenu() {
      this.ativado = !this.ativado;
      console.log(this.ativado);
    }
  },
  components: {
    Line
  }
};
</script>