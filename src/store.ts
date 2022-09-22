import ImgArumaoNormal from '@img/arumao_normal.png'
import ImgArumaoActive from '@img/arumao_active.png'
import ImgArumaoSpin from '@img/arumao_spin.png'

import ImgKamitaniNormal from '@img/kamitani_normal.png'
import ImgKamitaniActive from '@img/kamitani_active.png'
import ImgKamitaniSpin from '@img/kamitani_spin.png'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'

interface Vtuber {
  id: string
  name: string
  youtube: string
  twitter: string
  normalImage: string
  activeImage: string
  spinImage: string
  originLeft: number
  originTop: number
}

export const useStore = defineStore('main', () => {
  const vtubers = ref<Vtuber[]>([
    {
      id: 'arumao',
      name: '阿爾毛',
      youtube: 'https://www.youtube.com/c/ArumaoCh%E6%B0%B4%E8%B1%9A%E9%98%BF%E6%AF%9B',
      twitter: 'https://twitter.com/capybaraarumao',
      normalImage: ImgArumaoNormal,
      activeImage: ImgArumaoActive,
      spinImage: ImgArumaoSpin,
      originLeft: 49,
      originTop: 21,
    },
    {
      id: 'kamitani',
      name: '狼谷',
      youtube: 'https://www.youtube.com/c/kamitani_ookami',
      twitter: 'https://twitter.com/kamitani_ookami',
      normalImage: ImgKamitaniNormal,
      activeImage: ImgKamitaniActive,
      spinImage: ImgKamitaniSpin,
      originLeft: 49,
      originTop: 21,
    },
  ])
  const count = useStorage<number>('count', 0)

  return { vtubers, count }
})
