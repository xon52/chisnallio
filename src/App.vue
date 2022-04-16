<template>
  <layout-vue>
    <template v-slot:header>
      <h1>Header</h1>
      <h1>Header</h1>
      <h1>Header</h1>
    </template>
    <template v-slot:sidebar>
      <h1>SidebarSidebarSidebar</h1>
      <h1>SidebarSidebarSidebar</h1>
      <h1>SidebarSidebarSidebar</h1>
    </template>
    <template v-slot:footer>
      <h1>Footer</h1>
      <h1>Footer</h1>
      <h1>Footer</h1>
    </template>
    <template v-slot>
      <router-view />
    </template>
  </layout-vue>
</template>

<script setup lang="ts">
import LayoutVue from './components/layout/Layout.vue'
</script>

<style>
#app {
  height: 100vh;
}
</style>
