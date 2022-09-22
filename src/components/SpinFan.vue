<script setup lang="ts">
const props = withDefaults(defineProps<{
  active?: boolean
  intense?: boolean
  normalImage?: string
  activeImage?: string
  spinImage?: string
  turn?: number
  originLeft?: number
  originTop?: number
}>(), {
  active: false,
  intense: false,
  turn: 0,
  originLeft: 0,
  originTop: 0,
})

const styles = computed(() => {
  const { intense, turn, originLeft, originTop } = props
  const transform = [`rotate(${turn}turn)`]
  if (intense)
    transform.push('scale(2)')
  return {
    transform: transform.join(' '),
    transformOrigin: `${originLeft}% ${originTop}%`,
  }
})
</script>

<template>
  <div class="relative transition-all animate-animated animate-infinite" :class="{ active, intense }">
    <img :src="normalImage" draggable="false" :class="{ hidden: active }" />

    <img :src="activeImage" draggable="false" :class="{ hidden: !active }" />

    <img :src="spinImage" draggable="false" :style="styles" />
  </div>
</template>

<style lang="postcss" scope>
img {
  @apply object-cover absolute -bottom-10px;
  object-position: 50% 100%;
}
.active {
  transform: scale(1.05) translateY(-10px);
}
.intense {
  animation-name: rgb, shakeX;

  @keyframes rgb {
    from {
      filter: blur(2px) hue-rotate(0deg);
    }

    to {
      filter: blur(2px) hue-rotate(360deg);
    }
  }
}
</style>
