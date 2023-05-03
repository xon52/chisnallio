<template>
  <div :class="{ open }">
    <nav class="nav-menu">
      <NavigationMobileButtonVue :is-open="open" @click="onToggle" />
      <ul>
        <template v-for="link in links" :key="link.label">
          <NavigationButtonVue :link="link" @click="onToggle" />
        </template>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavigationButtonVue from './NavigationButton.vue'
import NavigationMobileButtonVue from './NavigationMobileButton.vue'
import type { PageLinkType } from '@/types'

const { links } = defineProps<{ links: PageLinkType[] }>()
const open = ref(false)
const onToggle = () => (open.value = !open.value)
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

.nav-menu {
  width: 60px;
  height: 60px;
  left: calc((100% - 60px) / 2);
  bottom: 10px;
  display: flex;
  position: fixed;
  background: $blue-bg;
  border-radius: 50%;
  transition: all 0.3s ease-out;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    opacity: 0;

    & > * {
      opacity: 0;
      transition: opacity 0.3s ease-out 0.2s;
      &:nth-child(2) {
        transition: opacity 0.3s ease-out 0.3s;
      }
      &:nth-child(3) {
        transition: opacity 0.3s ease-out 0.4s;
      }
      &:nth-child(4) {
        transition: opacity 0.3s ease-out 0.5s;
      }
      &:nth-child(5) {
        transition: opacity 0.3s ease-out 0.6s;
      }
    }
  }
}
.open .nav-menu {
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  bottom: 0;
  left: 0;

  ul {
    opacity: 1;

    li {
      opacity: 1;
    }
  }
}
</style>
