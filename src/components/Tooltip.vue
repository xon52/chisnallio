<template>
  <div class="tooltip" :data-tooltip="text" :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { text, color, backgroundColor, position } = defineProps<{
  text: string
  color: string
  backgroundColor: string
  position: 'TOP' | 'LEFT' | 'RIGHT' | 'BOTTOM'
}>()

const style = computed(() => ({
  backgroundColor,
  color,
  left: position === 'LEFT' ? 0 : 'auto',
  right: position === 'RIGHT' ? 0 : 'auto',
  top: position === 'TOP' ? 0 : 'auto',
  bottom: position === 'BOTTOM' ? 0 : 'auto',
}))
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;
.tooltip {
  &:hover::after {
    content: attr(data-tooltip);
    background-color: adjust-color($color: $black-bg, $alpha: -0.9);
    color: adjust-color($color: $black-bg);
    padding: 2px;
    font-size: small;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
