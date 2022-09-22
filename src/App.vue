<script setup lang="ts">
import sound from '@/assets/audio/267887__wjl__short-fireball-woosh.flac'
import AppNavbar from '@cp/AppNavbar.vue'
import ClickCount from '@cp/ClickCount.vue'
import SpinFan from '@cp/SpinFan.vue'

import { Howl } from 'howler'
import { TransitionPresets } from '@vueuse/core'
import { useStore } from '@/store'
import { useRandom } from '@/utils'

const target = ref<HTMLElement>()
const { pressed } = useMousePressed({ target })
const { space, enter } = useMagicKeys({
  passive: false,
  onEventFired: (e) => {
    const list = ['Space', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    if (list.includes(e.code)) e.preventDefault()
  },
})
const isPressed = computed(() => pressed.value || space.value || enter.value)

const store = useStore()
const { count: record, vtubers } = toRefs(store)
const { count, inc } = useCounter(record.value)

const queues = ref(0)

const duration = ref(3000)
const baseTurn = ref(0)
const turn = useTransition(baseTurn, {
  duration: duration.value,
  transition: TransitionPresets.easeOutCubic,
})
const speed = computed(() => {
  if (queues.value === 0) return 0
  return (queues.value / duration.value * 1000).toFixed(2)
})
const intense = computed(() => speed.value >= 6)

const onPress = () => {
  inc()
  baseTurn.value += useRandom(0.5, 1.5)

  queues.value += 1
  setTimeout(() => {
    queues.value -= 1
  }, duration.value)

  const howl = new Howl({
    src: sound,
    autoplay: false,
    loop: false,
    volume: intense.value ? 0.03 : 0.015,
  })
  howl.play()
}

watch(isPressed, (newValue) => {
  if (!newValue) return
  onPress()
})
</script>

<template>
  <AppNavbar />
  <main
    ref="target"
    class="flex-grow relative overflow-hidden flex flex-row flex-nowrap justify-center items-end"
  >
    <template v-for="({ normalImage, activeImage, spinImage, originLeft, originTop }, idx) in vtubers" :key="idx">
      <SpinFan
        v-bind="{
          active: isPressed,
          intense,
          turn,
          originLeft,
          originTop,
          normalImage,
          activeImage,
          spinImage,
        }"
        class="basis-300px"
      />
    </template>
    <ClickCount :active="isPressed" :count="count" class="absolute left-0 right-0 bottom-1/20" />
  </main>
</template>
