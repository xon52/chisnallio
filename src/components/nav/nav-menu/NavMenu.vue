<template>
  <div class="nav-menu-wrapper">
    <div class="menu-open-button" @click="openMenu" data-testid="nav-menu-open-button">
      <div>
        <transition-vue
          mode="out-in"
          enter-active-class="animate__animated animate__rotateIn animate__faster"
          leave-active-class="animate__animated animate__rotateOut animate__faster"
        >
          <icon-wrapper-vue v-if="isOpen" icon="fas xmark" />
          <icon-wrapper-vue v-else large icon="fas bars" />
        </transition-vue>
      </div>
    </div>
    <transition-vue
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <overlay-vue v-if="isOpen" @overlay-click="closeMenu" />
    </transition-vue>
    <transition-vue
      mode="out-in"
      enter-active-class="animate__animated animate__slideInLeft animate__faster"
      leave-active-class="animate__animated animate__slideOutLeft animate__faster"
    >
      <div v-if="isOpen" class="menu" data-testid="nav-menu-menu">
        <div class="menu-controls">
          <div class="menu-close-button" @click="closeMenu" data-testid="nav-menu-close-button">
            <icon-wrapper-vue icon="fas xmark" />
          </div>
        </div>
        <template v-for="link in pages">
          <nav-menu-button-vue :link="link" />
        </template>
        <menu-divider-vue />
        <template v-for="link in links">
          <nav-menu-button-vue :link="link" />
        </template>
      </div>
    </transition-vue>
  </div>
</template>

<script setup lang="ts">
import NavMenuButtonVue from '../nav-menu-button/NavMenuButton.vue'
import MenuDividerVue from '../nav-menu-divider/MenuDivider.vue'
import OverlayVue from '../../overlay/Overlay.vue'
import IconWrapperVue from '@/dependencies/IconWrapper.vue'
import { pages, links } from '@/pages/app/menuItems'
import { ref, Transition as TransitionVue } from 'vue'

const isOpen = ref(false)
const openMenu = () => (isOpen.value = true)
const closeMenu = () => (isOpen.value = false)
</script>

<style lang="scss" scoped>
.nav-menu-wrapper {
}
.menu-open-button {
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: xx-large;
  height: 100%;
  justify-content: center;
  margin: 0 5px;
  width: 40px;
  &:hover {
    animation: swing 1s;
    color: #ffd700;
  }
}
.menu {
  background-color: aqua;
  bottom: 0;
  left: 0;
  padding: 0 10px;
  position: absolute;
  top: 0;
  width: 150px;
  z-index: 100;
}
.menu-controls {
  display: flex;
  justify-content: end;
  .menu-close-button {
    padding: 5px;
    font-size: xx-large;
    cursor: pointer;
    &:hover {
      animation: swing 1s;
      color: #ffd700;
    }
  }
}
</style>
