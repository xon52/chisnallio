<template>
  <svg class="my-svg" :style="`max-height:${size}; max-width:${size};`" :viewBox="icon.viewBox">
    <path :d="icon.path" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" />
  </svg>
</template>

<script setup lang="ts">
import icons from '.'
import { computed } from 'vue'
import { hasProp } from '@/helpers'

const props = withDefaults(
  defineProps<{
    icon: string
    size?: string
    fill?: string
    stroke?: string
    strokeWidth?: number
  }>(),
  {
    size: '1em',
    fill: 'currentColor',
  }
)

const icon = computed(() => {
  if (!hasProp(icons, props.icon)) throw new Error(`Icon ${props.icon} not found`)
  return icons[props.icon]
})
</script>

<style lang="scss" scoped>
.my-svg {
  display: inline-block;
}
</style>
