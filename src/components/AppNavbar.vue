<script setup lang="ts">
import IconTwitter from '~icons/brandico/twitter-bird'
import IconYoutube from '~icons/ion/logo-youtube'
import IconPoint from '~icons/fa-solid/hand-point-right'
import IconGithub from '~icons/mdi/github'

import { useStore } from '@/store'
const store = useStore()
const { vtubers } = toRefs(store)
</script>

<template>
  <nav class="px-4 py-2 flex flex-wrap items-center">
    <div v-for="({ name, twitter, youtube }, idx) in vtubers" :key="idx" class="flex flex-nowrap items-center mr-8">
      <div
        class="flex flex-nowrap items-center flex-shrink-0 animate-animated animate-shakeX animate-infinite mr-2"
        :style="{
          animationDuration: '7s',
          animationDelay: `${idx * -0.2}s`,
        }"
      >
        <div>Follow {{ name }}</div>
        <IconPoint class="ml-2" />
      </div>

      <a :href="twitter" target="_blank" class="btn twitter">
        <IconTwitter />
      </a>

      <a :href="youtube" target="_blank" class="btn youtube">
        <IconYoutube />
      </a>
    </div>

    <a href="https://github.com/Rag1995/pop-kemon-vtuber-vite" target="_blank" class="btn ml-auto">
      <IconGithub />
    </a>
  </nav>
</template>

<style lang="postcss" scope>
.btn {
  @apply hover:(animate-animated animate-tada animate-fast animate-infinite);
}
.twitter {
  @apply text-sky-500;
}
.youtube {
  @apply text-red-500;
}
</style>
