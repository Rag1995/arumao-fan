<script setup lang="ts">
defineProps<{
  active?: boolean
  count?: number
}>()
</script>

<template>
  <div
    class="stroke-dark-900 stroke-9 font-titanOne text-8xl  text-center animate-animated animate-faster"
    :class="{ 'animate-shakeY': active }"
  >
    {{ count }}
  </div>
</template>
