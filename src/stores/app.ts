import { scrollToAnchor, getNearestPageAnchor, debounce } from '@/helpers'
import { defineStore } from 'pinia'

// Settings
const nearTopY = 100

// Store
export const useAppStore = defineStore('app', {
  state: () => ({
    scrollY: globalThis.scrollY,
  }),
  getters: {
    nearTop: (state) => state.scrollY < nearTopY,
  },
  actions: {
    initialise() {
      console.log('initialise')
      globalThis.addEventListener(
        'wheel',
        debounce((e: WheelEvent) => {
          e.preventDefault()
          const nearestAnchor = getNearestPageAnchor(e.deltaY)
          console.log('nearestAnchor', nearestAnchor)
          if (nearestAnchor !== undefined) scrollToAnchor(nearestAnchor)
        })
      )
      globalThis.addEventListener('scroll', () => {
        this.scrollY = globalThis.scrollY
      })
    },
  },
})
