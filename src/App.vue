<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Arumao from '@/components/Arumao.vue'
</script>

<template>
  <Navbar />
  <!-- <main class="flex flex-col justify-end items-stretch basis-50vh flex-shrink"> -->
  <main class="mt-auto basis-70vh flex justify-center items-stretch">
    <Arumao class="flex items-stretch" />
  </main>
  <!-- <Arumao class="mt-auto basis-50vh flex-grow flex flex-col items-center" /> -->
  <!-- </main> -->
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
