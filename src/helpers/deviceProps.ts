import { computed, ref } from 'vue'

const mobileLimit = 800
export const windowWidth = ref(globalThis.innerWidth)
export const isTouch = computed(() => 'ontouchstart' in globalThis || navigator.maxTouchPoints > 0)
export const isMobile = computed(() => windowWidth.value <= mobileLimit)

const onWidthChange = () => (windowWidth.value = globalThis.innerWidth)
// Add the listener for size changes
;(() => globalThis.addEventListener('resize', onWidthChange))()
