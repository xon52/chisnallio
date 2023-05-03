<template>
  <ul>
    <template v-for="link in links" :key="link.label">
      <NavigationButtonVue :link="link" />
    </template>
  </ul>
</template>

<script setup lang="ts">
import NavigationButtonVue from './NavigationButton.vue'
import type { PageLinkType } from '@/types'

const { links } = defineProps<{ links: PageLinkType[] }>()
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

ul {
  display: flex;
  align-items: center;
  padding-right: 40px;
}

li {
  margin-left: 20px;
  a {
    width: 80px;
    height: 20px;
    background: $accent;
    display: block;
    border-radius: 90px;
  }
}
</style>
