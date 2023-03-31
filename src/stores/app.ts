import { debounce } from '@/helpers'
import { defineStore } from 'pinia'

// Settings
const nearTopY = 100
const xsBreakpoint = import.meta.env.VITE_APP_XS_BREAKPOINT
const smBreakpoint = import.meta.env.VITE_APP_SM_BREAKPOINT
const mdBreakpoint = import.meta.env.VITE_APP_MD_BREAKPOINT
const lgBreakpoint = import.meta.env.VITE_APP_LG_BREAKPOINT
const xlBreakpoint = import.meta.env.VITE_APP_XL_BREAKPOINT

// Store
export const useAppStore = defineStore('app', {
  state: () => ({
    scrollY: globalThis.scrollY,
    width: globalThis.innerWidth,
  }),
  getters: {
    nearTop: (state) => state.scrollY < nearTopY,
    xsOnly: (state) => state.width < xsBreakpoint,
    smAndDown: (state) => state.width <= smBreakpoint,
    smAndUp: (state) => state.width >= smBreakpoint,
    mdAndDown: (state) => state.width <= mdBreakpoint,
    mdAndUp: (state) => state.width >= mdBreakpoint,
    lgAndDown: (state) => state.width <= lgBreakpoint,
    lgAndUp: (state) => state.width >= lgBreakpoint,
    xlOnly: (state) => state.width > xlBreakpoint,
  },
  actions: {
    initialise() {
      // Scroll listener
      globalThis.addEventListener(
        'scroll',
        debounce(() => {
          this.scrollY = globalThis.scrollY
        }, 50)
      )
      // Resize listener
      globalThis.addEventListener('resize', () => {
        this.width = globalThis.innerWidth
      })
    },
  },
})
