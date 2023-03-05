<template>
  <li tabindex="0" @click="link.anchor ? scrollToAnchor(link.anchor, offset) : null">
    <IconVue v-if="link.icon !== undefined" :icon="link.icon" />
    <span>{{ link.label }}</span>
  </li>
</template>

<script setup lang="ts">
import IconVue from '@/assets/icons/Icon.vue'
import { scrollToAnchor } from '@/helpers'
import { PageLinkType } from '@/types'

const { link } = defineProps<{ link: PageLinkType }>()
// console.log(variables)
const offset = 70
</script>

<style lang="scss" scoped>
@use '@/styles/3-helpers' as *;

li {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  color: $light-text;
  cursor: pointer;
  border-radius: 50% 0 0 50%;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: rgba($color: $light-text, $alpha: 0.2);
  }

  &:active {
    outline: none;
    background-color: rgba($color: $light-text, $alpha: 0.5);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
}
</style>
