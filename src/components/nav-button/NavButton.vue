<template>
  <div
    :class="['nav-button-wrapper', { 'nav-button-loading': isLoading }]"
    @mouseenter="onHoverChange(true)"
    @mouseleave="onHoverChange(false)"
  >
    <transition-vue
      mode="out-in"
      enter-active-class="animated flipInY"
      leave-active-class="animated flipOutY"
      :duration="delay"
    >
      <div v-if="isHover" class="nav-button-label">{{ label }}</div>
      <fa-icon-wrapper-vue v-else class="nav-button-icon" :icon="icon" />
    </transition-vue>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Transition as TransitionVue } from 'vue'
import FaIconWrapperVue from '../../dependencies/FaIconWrapper.vue'

const { icon, label, delay } = defineProps({
  icon: { type: String, required: true },
  label: { type: String, required: true },
  delay: { type: Number, default: 400 },
})

const isLoading = ref(true)
const isHover = ref(false)
const onHoverChange = (hover: boolean) => (isHover.value = hover)

onMounted(() => setTimeout(() => (isLoading.value = false), delay))
</script>

<style lang="scss" scoped>
.nav-button-wrapper {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: color cubic-bezier(0.7, 0.8, 0.9, 0.95) 0.2s;
  &:hover {
    color: #ffd700;
  }
}
.nav-button-label {
  font-size: medium;
}
.nav-button-icon {
  font-size: xx-large;
}
.nav-button-loading {
  opacity: 0;
  animation-name: bounceIn;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
</style>
