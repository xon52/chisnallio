<template>
  <div
    :class="['nav-button-wrapper', { 'nav-button-loading': isLoading, large: large }]"
    @mouseenter="onHoverChange(true)"
    @mouseleave="onHoverChange(false)"
    @click="onClick"
  >
    <transition-vue
      mode="out-in"
      enter-active-class="animate__animated animate__flipInY animate__faster"
      leave-active-class="animate__animated animate__flipOutY animate__faster"
    >
      <div v-if="isHover" class="nav-button-label">{{ link.label }}</div>
      <fa-icon-wrapper-vue v-else class="nav-button-icon" :icon="link.icon" />
    </transition-vue>
  </div>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref, Transition as TransitionVue } from 'vue'
import FaIconWrapperVue from '../../dependencies/FaIconWrapper.vue'
import router from '../../router'
import { LinkType } from '../../types'

const { link, loadingTime } = defineProps({
  link: { type: Object as PropType<LinkType>, required: true },
  loadingTime: { type: Number, default: 400 },
  large: { type: Boolean, default: false },
})

const isLoading = ref(true)
const isHover = ref(false)
const onHoverChange = (hover: boolean) => (isHover.value = hover)
const onClick = () => {
  if (link.path) router.push(link.path)
  else if (link.url) globalThis.open(link.url)
}

onMounted(() => setTimeout(() => (isLoading.value = false), loadingTime))
</script>

<style lang="scss" scoped>
.nav-button-wrapper {
  height: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: color cubic-bezier(0.7, 0.8, 0.9, 0.95) 0.2s;
  /* TODO: update sizes with design system vars */
  font-size: large;
  &:hover {
    color: #ffd700;
  }
  &.large {
    height: 40px;
    .nav-button-icon {
      /* TODO: update sizes with design system vars */
      font-size: xx-large;
    }
  }
}
.nav-button-loading {
  opacity: 0;
  animation-name: bounceIn;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
</style>
