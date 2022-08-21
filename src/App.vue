<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Arumao from '@/components/Arumao.vue'
</script>

<template>
  <Navbar />
  <main class="mt-auto flex flex-col justify-start items-center">
    <Arumao />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
