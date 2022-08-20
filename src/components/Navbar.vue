<script setup lang="ts">
import NavItem from './NavItem.vue'
import IconTwitter from '~icons/brandico/twitter-bird'
import IconYoutube from '~icons/ion/logo-youtube'
import IconGithub from '~icons/mdi/github'
import IconPointLeft from '~icons/fa-solid/hand-point-left'
</script>

<template>
  <nav class="w-100vw px-2 flex flex-nowrap justify-start items-center select-none">
    <NavItem
      href="https://twitter.com/capybaraarumao" target="_blank"
      class="hover:(text-sky-500 animate-tada animate-fast)"
    >
      <IconTwitter />
    </NavItem>

    <NavItem
      href="https://www.youtube.com/c/ArumaoCh%E6%B0%B4%E8%B1%9A%E9%98%BF%E6%AF%9B" target="_blank"
      class="hover:(text-red-600 animate-tada animate-fast)"
    >
      <IconYoutube />
    </NavItem>

    <NavItem class="point-left animate-shakeX">
      <IconPointLeft class="mr-2" />追隨水豚！
    </NavItem>

    <NavItem
      href="https://github.com/Rag1995/pop-kemon-vtuber-vite" target="_blank"
      class="ml-auto hover:(text-light-50 animate-tada animate-fast)"
    >
      <IconGithub />
    </NavItem>
  </nav>
</template>

<style lang="postcss" scope>
.point-left {
  animation: shakeX 5s infinite linear;
}
</style>
