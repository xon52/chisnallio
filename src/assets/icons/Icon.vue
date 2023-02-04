<template>
  <svg class="my-svg" :style="`max-height:${size}; max-width:${size};`" :viewBox="icon.viewBox">
    <path :d="icon.path" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth" />
  </svg>
</template>

<script setup lang="ts">
import * as icons from './'
import { computed } from 'vue'
import { hasProperty } from '@/helpers'
import type { IconType } from '@/types/IconType'

interface Props {
  icon: IconType
  size?: string
  fill?: string
  stroke?: string
  strokeWidth?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: '1em',
  fill: 'currentColor',
})

const icon = computed(() => {
  if (!hasProperty(icons, props.icon)) throw new Error(`Icon "${props.icon}" not found.`)
  return icons[props.icon]
})
</script>

<style lang="scss" scoped>
.my-svg {
  display: inline-block;
}
</style>
