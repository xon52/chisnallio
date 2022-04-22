<template>
  <sidebar-vue>
    <template v-slot:header></template>
    <template v-slot>
      <template v-for="link in pages">
        <nav-button-vue large :link="link" />
      </template>
    </template>
    <template v-slot:footer>
      <template v-for="link in links">
        <nav-button-vue :link="link" />
      </template>
    </template>
  </sidebar-vue>
</template>

<script setup lang="ts">
import SidebarVue from '../../components/sidebar/Sidebar.vue'
import NavButtonVue from '../../components/nav-button/NavButton.vue'
import { pages, links } from './menuItems'
</script>

<style lang="scss" scoped></style>
