<script setup lang="ts">
defineProps<{
  active?: boolean
  count?: number
}>()
</script>

<template>
  <div
    class="text-stroke-dark-900 text-stroke-5 text-light-500 font-titanOne text-8xl  text-center animate-animated animate-faster"
    :class="{ 'animate-shakeY': active }"
  >
    {{ count }}
  </div>
</template>
