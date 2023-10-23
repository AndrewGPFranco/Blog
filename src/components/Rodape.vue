<template>
  <footer class="bg-black text-orange-500 text-center p-2.5">
    <h1>&copy; {{ year }} All Rights Reserved</h1>
            <ul class="flex flex-col mt-2">
            <h1 class="text-orange-500 font-bold">Contact</h1>
            <div class="flex justify-around mt-3 mb-3">
                <li  class="border-b border-gray-300"><a href="https://www.youtube.com/channel/UC7L-jcONEz0AG56nfSQiXvA" target="_blank"><i class="pi pi-youtube" style="font-size: 2rem; color: red"></i></a></li>
                <li class="border-b border-gray-300"><a href="https://www.linkedin.com/in/andrewgpsilva/" target="_blank"><i class="pi pi-linkedin" style="font-size: 2rem; color: #0077B5;"></i></a></li>
                <li class="border-b border-gray-300"><a href="https://github.com/AndrewGPSilva" target="_blank"><i class="pi pi-github" style="font-size: 2rem; color: white"></i></a></li>
            </div>
        </ul>
  </footer>
</template>

<script>
export default {
  name: "Rodape",
  data() {
    return {
      year: ""
    }
  },
  created() {
    this.getYear()
  },
  methods: {
    getYear() {
      const currentDate = new Date()
      this.year = currentDate.getFullYear()
    }
  }
}
</script>
