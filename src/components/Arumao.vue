<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'

const target = ref<HTMLElement>()
const { pressed } = useMousePressed({ target })
const { space, enter } = useMagicKeys()
const isPressed = computed(() => pressed.value || space.value || enter.value)

const count = useStorage<number>('count', 0)

const duration = ref(3000)
const baseTurn = ref(0)
const turn = useTransition(baseTurn, {
  duration: duration.value,
  transition: TransitionPresets.easeOutCubic,
})

const queues = reactive<number[]>([])
const speed = computed(() => {
  const count = queues.length
  if (count === 0) return 0
  return (count / duration.value * 1000).toFixed(2)
})
const active = computed(() => speed.value >= 6)

const genRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}
const onPress = () => {
  count.value! += 1
  baseTurn.value += genRandom(0.5, 1.2)
  const queue = count.value
  queues.push(queue)
  setTimeout(() => {
    const idx = queues.indexOf(queue)
    queues.splice(idx, 1)
  }, duration.value)
}

watch(isPressed, (newValue) => {
  if (!newValue) return
  onPress()
})
</script>

<template>
  <div
    ref="target"
    class="relative overflow-visible select-none transition-transform duration-100 ease-in-out animate-faster animate-infinite"
    :class="{ pressed: isPressed, active }"
  >
    <div>
      <img
        v-if="isPressed || active" src="@/assets/image/aru_laugh.png" draggable="false"
        class="object-contain w-full h-full"
      />
      <img v-else src="@/assets/image/aru_normal.png" draggable="false" class="object-contain w-full h-full" />
    </div>

    <img
      src="@/assets/image/mao.png" draggable="false" class="object-contain w-full h-full mao absolute top-0"
      :style="`transform: rotate(${turn}turn) ${active ? 'scale(2)' : ''};`"
    />

    <div
      class="stroke-dark-900 stroke-9 font-titan-one text-7xl absolute bottom-0 left-0 right-0 text-center pb-2 animate-faster"
      :class="{ 'animate-shakeY': isPressed }"
    >
      {{ count }}
    </div>
  </div>
</template>

<style lang="postcss" scope>
.mao {
  transform-origin: 49% 21%;
}

.pressed {
  transform: scale(1.02);
}

.active {
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
