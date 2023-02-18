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
      globalThis.addEventListener('scroll', () => (this.scrollY = globalThis.scrollY))
    },
  },
})
