<template>
  <toolbar-vue>
    <template v-slot:start>
      <nav-menu-vue />
    </template>
    <template v-slot:center> </template>
    <template v-slot:end> </template>
  </toolbar-vue>
</template>

<script setup lang="ts">
import ToolbarVue from '../../components/toolbar/Toolbar.vue'
import NavMenuVue from '../../components/nav/nav-menu/NavMenu.vue'
</script>

<style lang="scss" scoped></style>
