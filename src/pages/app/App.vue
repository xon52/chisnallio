<template>
  <layout-vue>
    <template v-slot:header v-if="isMobile">
      <toolbar-vue />
    </template>
    <template v-slot:sidebar v-if="!isMobile">
      <sidebar-vue />
    </template>
    <template v-slot>
      <router-view />
    </template>
  </layout-vue>
</template>

<script setup lang="ts">
import LayoutVue from '@/components/layout/Layout.vue'
import SidebarVue from './Sidebar.vue'
import ToolbarVue from './Toolbar.vue'
import { isMobile } from '@/helpers'
</script>

<style>
#app {
  height: 100vh;
}
</style>
