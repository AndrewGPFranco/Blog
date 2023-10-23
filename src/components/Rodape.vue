<template>
  <footer class="bg-black text-orange-500 text-center p-2.5">
    <h1>&copy; {{ year }} All Rights Reserved</h1>
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
