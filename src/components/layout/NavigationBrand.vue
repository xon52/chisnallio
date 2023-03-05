<template>
  <div id="brand" @click="scrollToAnchor('Intro', 160)">
    <div id="logo"></div>
    <span id="name" :class="{ 'near-top': appStore.nearTop }">Keagan Chisnall</span>
  </div>
</template>

<script setup lang="ts">
import { scrollToAnchor } from '@/helpers'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<style lang="scss" scoped>
@use '@/styles/3-helpers' as *;

nav:hover {
  #logo {
    scale: 1.05;
  }
  #name {
    opacity: 1;
  }
}

#brand {
  display: flex;
  align-items: center;
  padding-left: 40px;
  cursor: pointer;
  flex-shrink: 1;

  &:hover {
    #name {
      text-shadow: 0 0 10px $accent;
      scale: 1.05;
    }
  }
}

#logo {
  width: $nav-height-scroll;
  height: $nav-height-scroll;
  background-image: url(@/assets/logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10%;
  transition: all 0.3s;
  margin-right: 10px;
}

#name {
  font-family: LaBelleAurore, sans-serif, serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.5;
  color: $light-text;
  user-select: none;
  opacity: 0;
  transition: all 0.3s;
  &.near-top {
    opacity: 1 !important;
  }
}

// #word-mark {
//   width: 120px;
//   height: 20px;
//   background: $accent;
//   border-radius: 90px;
//   margin-left: 20px;
//   opacity: 0;
//   transition: all 0.3s;
//   &.near-top {
//     opacity: 1 !important;
//   }
// }
</style>
