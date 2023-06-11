<template>
  <div class="nav-wrapper" :class="{ 'near-top': appStore.nearTop }">
    <NavigationBrandVue />
    <ul>
      <template v-for="link in links" :key="link.label">
        <NavigationButtonVue :link="link" />
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import NavigationBrandVue from './NavigationBrand.vue'
import NavigationButtonVue from './NavigationButton.vue'
import { useAppStore } from '@/stores/app'
import type { PageLinkType } from '@/types'

const { links } = defineProps<{ links: PageLinkType[] }>()

const appStore = useAppStore()
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;
.nav-wrapper {
  width: 100vw;
  height: $nav-height-scroll;
  background: $nav-bg;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  transition: all 0.3s;
  box-shadow: 0 4px 20px -5px rgba(#000, 0.4);
  opacity: 0.8;
  &.near-top,
  &:hover {
    box-shadow: 0 4px 5px -5px rgba(#000, 0.2);
    height: $nav-height-top;
    opacity: 1;

    .brand {
      .logo {
        scale: 1.05;
      }
      .name {
        opacity: 1;
      }
    }
  }
}

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
