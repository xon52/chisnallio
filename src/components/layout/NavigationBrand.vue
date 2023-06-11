<template>
  <div class="brand" @click="scrollToAnchor('Intro', 160)">
    <div class="logo" v-if="appStore.mdAndUp"></div>
    <span class="name" :class="{ 'near-top': appStore.nearTop }">Keagan Chisnall</span>
  </div>
</template>

<script setup lang="ts">
import { scrollToAnchor } from '@/helpers'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

.brand {
  display: flex;
  align-items: center;
  padding-left: 40px;
  cursor: pointer;
  flex-shrink: 1;

  &:hover {
    .name {
      text-shadow: 0 0 10px $accent;
      scale: 1.05;
    }
  }
}

.logo {
  width: $nav-height-scroll;
  height: $nav-height-scroll;
  background-image: url(@/assets/logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10%;
  transition: all 0.3s;
  margin-right: 10px;
}

.name {
  font-family: LaBelleAurore, sans-serif, serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.5;
  color: $light-text;
  user-select: none;
  transition: all 0.3s;
  &.near-top {
    opacity: 1 !important;
  }
}
</style>
