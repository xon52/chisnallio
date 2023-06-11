<template>
  <NavigationWebVue v-if="appStore.smAndUp" :links="webLinks" />
  <NavigationMobileVue v-else :links="mobLinks" />
</template>

<script setup lang="ts">
import NavigationMobileVue from './NavigationMobile.vue'
import NavigationWebVue from './NavigationWeb.vue'
import { useAppStore } from '@/stores/app'
import pageLinks from '@/pages/PageLinks'

const mobLinks = pageLinks.filter((link) => link.showInMobNav)
const webLinks = pageLinks.filter((link) => link.showInWebNav)

const appStore = useAppStore()
</script>

<style lang="scss" scoped></style>
