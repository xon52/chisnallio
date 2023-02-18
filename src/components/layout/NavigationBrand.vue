<template>
  <div id="brand">
    <div id="logo" @click="scrollTo('#home', 160)"></div>
    <!-- <div id="word-mark" :class="{ 'near-top': appStore.nearTop }"></div> -->
    <span id="name" :class="{ 'near-top': appStore.nearTop }">Keagan Chisnall</span>
  </div>
</template>

<script setup lang="ts">
import { scrollTo } from '@/helpers'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<style lang="scss" scoped>
@import '@/styles/colors';
@import '@/styles/layout';

#brand {
  display: flex;
  align-items: center;
  padding-left: 40px;
}

#logo {
  width: $nav-height-scroll;
  height: $nav-height-scroll;
  background-image: url(@/assets/logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10%;
  cursor: pointer;
}

#name {
  font-family: LaBelleAurore, sans-serif, serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
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
