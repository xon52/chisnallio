<template>
  <nav :class="{ 'near-top': store.nearTop }">
    <NavigationBrandVue />
    <div id="menu">
      <div id="menu-toggle">
        <div id="menu-icon">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
      <ul>
        <template v-for="link in links" :key="link.label">
          <NavigationButtonVue :link="link" />
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import NavigationBrandVue from './NavigationBrand.vue'
import NavigationButtonVue from './NavigationButton.vue'
import { useAppStore } from '@/stores/app'
import pageLinks from '@/pages/PageLinks'

const links = pageLinks.filter((link) => link.showInNav)

const store = useAppStore()
</script>

<style lang="scss" scoped>
@use '@/styles/helpers' as *;

/*** Navigation Styles ***/
nav {
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

#menu,
ul {
  display: flex;
  align-items: center;
}

/*** Menu Styles ***/
#menu {
  justify-content: flex-end;
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

#menu-toggle {
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  background: darken($nav-bg, 5%);
  border-radius: 50%;
  cursor: pointer;
  display: none;
  &:hover .bar {
    width: 25px;
  }
  &.closeMenu {
    .bar {
      width: 25px;
      &:first-child {
        transform: translateY(7px) rotate(45deg);
      }
      &:nth-child(2) {
        transform: scale(0);
      }
      &:last-child {
        transform: translateY(-7px) rotate(-45deg);
      }
    }
  }
}

.bar {
  width: 25px;
  height: 2px;
  background: $accent;
  transition: 0.3s ease-in-out;
  &:nth-child(2) {
    width: 20px;
    margin: 5px 0;
  }
  &:last-child {
    width: 15px;
  }
}

@media screen and (max-width: 767px) {
  #menu-toggle {
    display: flex;
  }
  ul {
    display: inline-block;
    width: 100vw;
    height: 0;
    position: absolute;
    top: $nav-height-top;
    box-shadow: 0 5px 30px -4px rgba(#000, 0.2);
    transition: all 0.3s;
    &.showMenu {
      height: 250px;
      li {
        height: 80px;
        opacity: 1;
        visibility: visible;
      }
    }
  }
  li {
    width: 50%;
    height: 80px;
    float: left;
    padding-left: 40px;
    opacity: 0;
    visibility: hidden;
    margin-left: 0;
    transition: all 0.3s 0.1s;
    &:first-child,
    &:nth-child(2) {
      margin-top: 80px;
    }
  }
}
</style>
