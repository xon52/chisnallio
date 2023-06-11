<template>
  <div :class="{ open }">
    <nav class="navigation-mobile">
      <NavigationHamburgerVue :is-open="open" @click="onClick" />
      <ul v-if="open">
        <template v-for="link in links">
          <NavigationButtonVue :link="link" @click="onClick" />
        </template>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavigationButtonVue from './NavigationButton.vue'
import NavigationHamburgerVue from './NavigationHamburger.vue'
import type { PageLinkType } from '@/types'

const { links } = defineProps<{ links: PageLinkType[] }>()
const open = ref(false)
const onClick = () => (open.value = !open.value)
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

$size: 60px;
$spacing: 10px;
$z-index: 100;

.navigation-mobile {
  width: $size;
  height: $size;
  left: calc((100% - $size) / 2);
  bottom: $spacing;
  display: flex;
  position: fixed;
  background: $blue-bg;
  border-radius: 50%;
  transition: all 0.3s ease-out;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  z-index: $z-index;
  box-shadow: 0 0 5px $light-text;

  &:hover {
    box-shadow: 0 0 10px $light-text;
    opacity: 1;
  }

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
.open .navigation-mobile {
  width: 100%;
  height: 100%;
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
