<template>
  <div class="nav-wrapper" :class="{ 'near-top': appStore.nearTop }">
    <NavigationBrandVue />
    <NavigationWebVue v-if="appStore.smAndUp" :links="links" />
    <NavigationMobileVue v-else :links="links" />
  </div>
</template>

<script setup lang="ts">
import NavigationBrandVue from './NavigationBrand.vue'
import NavigationMobileVue from './NavigationMobile.vue'
import NavigationWebVue from './NavigationWeb.vue'
import { useAppStore } from '@/stores/app'
import pageLinks from '@/pages/PageLinks'

const links = pageLinks.filter((link) => link.showInNav)

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
  }
}
</style>
